import { Component, OnInit } from '@angular/core';
import {Assignment3MoviesService} from "../../services/assignment-3-movies.service";
import {Movie} from "../../../../../../../../domain/models/Movie.model";

@Component({
  selector: 'app-assignment-3-movies-bucket',
  templateUrl: './assignment-3-movies-bucket.component.html',
  styleUrls: ['./assignment-3-movies-bucket.component.scss']
})
export class Assignment3MoviesBucketComponent implements OnInit {

	public movies$ = this.moviesService.savedMovies$();

	constructor(private moviesService: Assignment3MoviesService) {
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
