import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/share';
import {Movie} from "../../../../../../../domain/models/Movie.model";

@Injectable()
export class Assignment3MoviesService {

	private moviesSearchCache: Map<string, Observable<Array<Movie>>> = new Map();
	private moviesSearchCacheSubject: BehaviorSubject<Array<Movie>> = new BehaviorSubject([]);
	private savedMoviesCacheSubject: BehaviorSubject<Array<Movie>> = new BehaviorSubject([]);

	constructor(private http: HttpClient) {
	}

	public savedMovies$(): Observable<Array<Movie>> {
		this.http.get<Array<Movie>>("/api/movies")
			.do(movies => this.savedMoviesCacheSubject.next(movies))
			.take(1)
			.subscribe();

		return this.savedMoviesCacheSubject;
	}

	public searchMovies$(searchQuery?: string): Observable<Array<Movie>> {
		if (searchQuery) {
			if (!this.moviesSearchCache.get(searchQuery)) {
				this.moviesSearchCache.set(searchQuery, this.http.get<Array<Movie>>("/api/movies/search", {params: {s: searchQuery}}))
			}

			this.moviesSearchCache.get(searchQuery)
				.take(1)
				.do(movies => this.moviesSearchCacheSubject.next(movies))
				.shareReplay()
				.subscribe();
		}

		return this.moviesSearchCacheSubject;
	}

	public saveMovie$(movies: Array<Movie>): Observable<any> {
		return this.http.post<any>("/api/movies", movies)
			.take(1)
			.do(() => this.invalidateSavedMoviesCache())
	}

	public removeAllMovies$() {
		return this.http.delete<any>("/api/movies")
			.take(1)
			.do(() => this.invalidateSavedMoviesCache())
	}

	public removeMovie$(movie: Movie) {
		return this.http.delete<any>(`/api/movies/${movie.imdbID}`)
			.take(1)
			.do(() => this.invalidateSavedMoviesCache())
	}

	private invalidateSavedMoviesCache() {
		this.savedMovies$()
			.subscribe()
	}

}
