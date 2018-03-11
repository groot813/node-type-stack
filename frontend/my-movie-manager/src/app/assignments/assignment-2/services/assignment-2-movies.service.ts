import {Injectable} from '@angular/core';
import {Movie} from "../../../../../../../domain/models/Movie.model";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class Assignment2MoviesService {

	private searchMoviesCacheMap: Map<string, Observable<Array<Movie>>> = new Map();
	private savedMoviesCacheSubject: BehaviorSubject<Array<Movie>> = new BehaviorSubject([]);

	constructor(private http: HttpClient) {
	}

	public savedMovies$(): Observable<Array<Movie>> {
		if (!this.savedMoviesCacheSubject.getValue()) {
			this.http.get<Array<Movie>>("/api/movies")
				.take(1)
				.do(movies => this.savedMoviesCacheSubject.next(movies))
				.subscribe();
		}

		return this.savedMoviesCacheSubject;

	}

	public searchMovies$(searchQuery?: string): Observable<Array<Movie>> {
		if (!this.searchMoviesCacheMap.get(searchQuery)) {
			this.searchMoviesCacheMap.set(searchQuery, this.http.get<Array<Movie>>("/api/movies/search", {params: {s: searchQuery}})
				.take(1))
		}

		return this.searchMoviesCacheMap.get(searchQuery);
	}

	public saveMovie$(movies: Array<Movie>): Observable<any> {

		return this.http.post<any>("/api/movies", movies)
			.do(() => this.savedMoviesCacheSubject.next(null))
			.do(() => this.savedMovies$())
			.take(1)
	}

	public removeAllMovies$() {
		return this.http.delete<any>("/api/movies")
			.do(() => this.savedMoviesCacheSubject.next(null))
			.do(() => this.savedMovies$())
			.take(1)
	}

	public removeMovie$(movie: Movie) {
		return this.http.delete<any>(`/api/movies/${movie.imdbID}`)
			.do(() => this.savedMoviesCacheSubject.next(null))
			.do(() => this.savedMovies$())
			.take(1)
	}


}
