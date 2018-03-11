import {Component, OnInit} from '@angular/core';
import {Assignment3MoviesService} from "../../services/assignment-3-movies.service";
import {Movie} from "../../../../../../../../domain/models/Movie.model";
import {StateService} from "../../services/state.service";

@Component({
	selector: 'app-assignment-3-movies-bucket',
	templateUrl: './assignment-3-movies-bucket.component.html',
	styleUrls: ['./assignment-3-movies-bucket.component.scss']
})
export class Assignment3MoviesBucketComponent implements OnInit {

	public state$ = this.applicationState.state$;

	constructor(private applicationState: StateService) {
	}

	ngOnInit() {
	}

	public handleRemoveAllButtonCLick() {
	}

	public handleRemoveFromBucketClick(movie: Movie) {
	}

}
