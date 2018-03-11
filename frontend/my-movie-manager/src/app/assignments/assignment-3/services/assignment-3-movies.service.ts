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


}
