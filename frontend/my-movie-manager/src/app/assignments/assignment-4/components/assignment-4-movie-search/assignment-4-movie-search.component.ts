import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Movie} from "../../../../../../../../domain/models/Movie.model";
import {Assignment4MoviesService} from "../../services/assignment-4-movies.service";
import {Subject} from "rxjs/Subject";

@Component({
	selector: 'app-assignment-4-movie-search',
	templateUrl: './assignment-4-movie-search.component.html',
	styleUrls: ['./assignment-4-movie-search.component.scss']
})
export class Assignment4MovieSearchComponent implements OnInit {

	public searchControl: FormControl = new FormControl("communication");
	public movies$: Observable<Array<Movie>> = this.moviesService.searchMovies$();
	public searchHistory: Array<string> = [];
	public selectedItemSubject: Subject<string>;
	private searchControlSubscription: Subscription = this.createSearchControlSubscription();

	constructor(private moviesService: Assignment4MoviesService) {
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
			.debounceTime(1000)
			.filter(search => !!search)
			.do(search => this.moviesService.searchMovies$(search).subscribe())
			.do(search => this.searchHistory.push(search))
			.subscribe()
	}

}
