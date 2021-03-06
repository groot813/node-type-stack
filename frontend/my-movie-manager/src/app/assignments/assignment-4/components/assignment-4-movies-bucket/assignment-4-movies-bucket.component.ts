import {Component, OnInit} from '@angular/core';
import {Assignment4MoviesService} from "../../services/assignment-4-movies.service";
import {Movie} from "../../../../../../../../domain/models/Movie.model";

@Component({
	selector: 'app-assignment-4-movies-bucket',
	templateUrl: './assignment-4-movies-bucket.component.html',
	styleUrls: ['./assignment-4-movies-bucket.component.scss']
})
export class Assignment4MoviesBucketComponent implements OnInit {

	public movies$ = this.moviesService.savedMovies$();

	constructor(private moviesService: Assignment4MoviesService) {
	}

	ngOnInit() {
	}

	public handleRemoveAllButtonCLick() {
		this.moviesService.removeAllMovies$()
			.subscribe();
	}

	public handleRemoveFromBucketClick(movie: Movie) {
		console.log("click")
		this.moviesService.removeMovie$(movie)
			.subscribe()
	}

}
