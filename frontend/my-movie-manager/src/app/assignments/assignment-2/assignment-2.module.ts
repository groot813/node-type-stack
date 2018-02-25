import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Assignment2MovieSearchComponent} from './components/assignment-2-movie-search/assignment-2-movie-search.component';
import {Assignment2MoviesBucketComponent} from './components/assignment-2-movies-bucket/assignment-2-movies-bucket.component';
import {Assignment2MoviesComponent} from './components/assignment-2-movies/assignment-2-movies.component';
import {Assignment2MoviesService} from "./services/assignment-2-movies.service";
import {CommonSharedModule} from "../../common-shared/common-shared.module";

@NgModule({
	imports: [
		CommonModule,
		CommonSharedModule
	],
	exports: [Assignment2MoviesComponent],
	providers: [Assignment2MoviesService],
	declarations: [Assignment2MovieSearchComponent, Assignment2MoviesBucketComponent, Assignment2MoviesComponent]
})
export class Assignment2Module {
}
