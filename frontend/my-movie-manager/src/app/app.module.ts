import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {CoreModule} from "./core/core.module";
import {MoviesFormComponent} from './components/movies-form/movies-form.component';
import {Assignment1Module} from "./assignments/assignment-1/assignment-1.module";
import {CommonSharedModule} from "./common-shared/common-shared.module";
import {Assignment2Module} from "./assignments/assignment-2/assignment-2.module";
import {Assignment3Module} from "./assignments/assignment-3/assignment-3.module";

@NgModule({
	declarations: [
		AppComponent,
		MoviesListComponent,
		MoviesFormComponent,
	],
	imports: [
		CoreModule,
		CommonSharedModule,
		Assignment1Module,
		Assignment2Module,
		Assignment3Module
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
