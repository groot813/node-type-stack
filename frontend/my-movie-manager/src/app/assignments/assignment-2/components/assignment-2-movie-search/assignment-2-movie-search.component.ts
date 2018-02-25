import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../../../../../../domain/models/Movie.model";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Assignment2MoviesService} from "../../services/assignment-2-movies.service";


@Component({
	selector: 'app-assignment-2-movie-search',
	templateUrl: './assignment-2-movie-search.component.html',
	styleUrls: ['./assignment-2-movie-search.component.scss']
})
export class Assignment2MovieSearchComponent implements OnInit {

	public searchControl: FormControl = new FormControl("");
	public movies: Array<Movie>;
	private searchControlSubscription: Subscription = this.createSearchControlSubscription();

	constructor(private moviesService: Assignment2MoviesService) {
	}

	ngOnInit() {
	}

	ngOnDestroy() {
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
					.do(movies => this.movies = movies)
					.subscribe()
			})
	}

}
