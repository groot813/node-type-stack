import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/debounceTime';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Movie} from "../../../../../../../../domain/models/Movie.model";
import {Assignment3MoviesService} from "../../services/assignment-3-movies.service";

@Component({
	selector: 'app-assignment-3-movie-search',
	templateUrl: './assignment-3-movie-search.component.html',
	styleUrls: ['./assignment-3-movie-search.component.scss']
})
export class Assignment3MovieSearchComponent implements OnInit {

	public searchControl: FormControl = new FormControl("mission impossible");
	public movies$: Observable<Array<Movie>> = this.moviesService.searchMovies$();
	private searchControlSubscription: Subscription = this.createSearchControlSubscription();

	constructor(private moviesService: Assignment3MoviesService) {
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		this.searchControlSubscription.unsubscribe();
	}

	public handleAddToBucketClick(movie: Movie) {
		this.moviesService.saveMovie$([movie])
			.subscribe();
	}

	private createSearchControlSubscription(): Subscription {
		return this.searchControl.valueChanges
			.debounceTime(500)
			.subscribe(search => {
				this.moviesService.searchMovies$(search)
					.subscribe()
			})
	}

}
