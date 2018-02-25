import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../../../../../../domain/models/Movie.model";
import {Assignment2MoviesService} from "../../services/assignment-2-movies.service";

@Component({
  selector: 'app-assignment-2-movies-bucket',
  templateUrl: './assignment-2-movies-bucket.component.html',
  styleUrls: ['./assignment-2-movies-bucket.component.scss']
})
export class Assignment2MoviesBucketComponent implements OnInit {

	public movies$ = this.moviesService.savedMovies$();

	constructor(private moviesService: Assignment2MoviesService) {
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
