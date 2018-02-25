import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../../../../../../domain/models/Movie.model";
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/debounceTime';
import {Assignment1MoviesService} from "../../services/assignment-1-movies.service";

@Component({
  selector: 'app-assignment-1-movie-search',
  templateUrl: './assignment-1-movie-search.component.html',
  styleUrls: ['./assignment-1-movie-search.component.scss']
})
export class Assignment1MovieSearchComponent implements OnInit {

	public searchControl: FormControl = new FormControl("");
	public movies: Array<Movie>;

	constructor(private moviesService: Assignment1MoviesService) { }

	ngOnInit() {
		// subscribe here
	}

}
