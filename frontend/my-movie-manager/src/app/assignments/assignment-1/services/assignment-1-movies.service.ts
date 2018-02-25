import {Injectable} from '@angular/core';
import {Movie} from "../../../../../../../domain/models/Movie.model";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Injectable()
export class Assignment1MoviesService {

	constructor(private http: HttpClient) {
	}

	public searchMovies$(searchQuery?: string): Observable<Array<Movie>> {
		return this.http.get<Array<Movie>>("/api/movies/search", {params: {s: searchQuery}})
				.take(1)

	}

}
