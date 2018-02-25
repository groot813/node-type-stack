import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Assignment1MovieSearchComponent} from './components/assignment-1-movie-search/assignment-1-movie-search.component';
import {CommonSharedModule} from "../../common-shared/common-shared.module";
import {Assignment1MoviesService} from "./services/assignment-1-movies.service";

@NgModule({
	imports: [
		CommonModule,
		CommonSharedModule
	],
	exports: [Assignment1MovieSearchComponent],
	providers: [Assignment1MoviesService],
	declarations: [Assignment1MovieSearchComponent]
})
export class Assignment1Module {
}
