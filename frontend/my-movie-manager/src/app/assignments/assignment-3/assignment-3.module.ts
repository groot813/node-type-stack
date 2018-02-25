import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Assignment3MovieSearchComponent} from './components/assignment-3-movie-search/assignment-3-movie-search.component';
import {Assignment3MoviesComponent} from './components/assignment-3-movies/assignment-3-movies.component';
import {Assignment3MoviesBucketComponent} from './components/assignment-3-movies-bucket/assignment-3-movies-bucket.component';
import {CommonSharedModule} from "../../common-shared/common-shared.module";
import {Assignment3MoviesService} from "./services/assignment-3-movies.service";

@NgModule({
	imports: [
		CommonModule,
		CommonSharedModule
	],
	exports: [Assignment3MoviesComponent],
	providers: [Assignment3MoviesService],
	declarations: [Assignment3MovieSearchComponent, Assignment3MoviesComponent, Assignment3MoviesBucketComponent]
})
export class Assignment3Module {
}
