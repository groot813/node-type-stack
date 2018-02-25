import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from '../../../../../../domain/models/Movie.model';
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';


@Injectable()
export class MoviesService {

	private moviesSearchCacheSubject = new BehaviorSubject([]);
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
			this.http.get<Array<Movie>>("/api/movies/search", {params: {s: searchQuery}})
				.do(movies => this.moviesSearchCacheSubject.next(movies))
				.take(1)
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
			.do(() => console.log("removed movie"))
			.do(() => this.invalidateSavedMoviesCache())
	}

	private invalidateSavedMoviesCache() {
		console.log("invalidating cahce")
		this.savedMovies$()
			.subscribe()
	}

}
