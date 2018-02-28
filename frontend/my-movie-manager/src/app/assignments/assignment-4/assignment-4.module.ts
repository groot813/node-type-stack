import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagListComponent} from './shared/components/tag-list/tag-list.component';
import {Assignment4MovieSearchComponent} from './components/assignment-4-movie-search/assignment-4-movie-search.component';
import {Assignment4MoviesComponent} from './components/assignment-4-movies/assignment-4-movies.component';
import {Assignment4MoviesBucketComponent} from "./components/assignment-4-movies-bucket/assignment-4-movies-bucket.component";
import {Assignment4MoviesService} from "./services/assignment-4-movies.service";
import {CommonSharedModule} from "../../common-shared/common-shared.module";

@NgModule({
	imports: [
		CommonModule,
		CommonSharedModule
	],
	exports: [Assignment4MoviesComponent],
	providers: [Assignment4MoviesService],
	declarations: [Assignment4MovieSearchComponent, Assignment4MoviesComponent, Assignment4MoviesBucketComponent, TagListComponent]
})

export class Assignment4Module {

}
