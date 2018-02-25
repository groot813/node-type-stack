import {Injectable} from '@angular/core';
import {Movie} from "../../../../../../../domain/models/Movie.model";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';


@Injectable()
export class Assignment2MoviesService {

	constructor(private http: HttpClient) {
	}

	public savedMovies$(): Observable<Array<Movie>> {
		return this.http.get<Array<Movie>>("/api/movies")
			.take(1)
	}

	public searchMovies$(searchQuery?: string): Observable<Array<Movie>> {
		return this.http.get<Array<Movie>>("/api/movies/search", {params: {s: searchQuery}})
			.take(1)
	}

	public saveMovie$(movies: Array<Movie>): Observable<any> {
		return this.http.post<any>("/api/movies", movies)
			.take(1)
	}

	public removeAllMovies$() {
		return this.http.delete<any>("/api/movies")
			.take(1)
	}

	public removeMovie$(movie: Movie) {
		return this.http.delete<any>(`/api/movies/${movie.imdbID}`)
			.take(1)
	}


}
