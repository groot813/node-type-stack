import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../core/services/movies.service";
import {Movie} from "../../../../../../domain/models/Movie.model";

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

	public movies$ = this.moviesService.savedMovies$();

	constructor(private moviesService: MoviesService) {
	}

	ngOnInit() {
	}

	public handleRemoveAllButtonCLick() {
		this.moviesService.removeAllMovies$()
			.subscribe();
	}

	public handleRemoveFromBucketClick(movie: Movie) {
		this.moviesService.removeMovie$(movie)
			.subscribe()
	}
}
