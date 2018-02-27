import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Assignment1Module} from "./assignments/assignment-1/assignment-1.module";
import {CommonSharedModule} from "./common-shared/common-shared.module";
import {Assignment2Module} from "./assignments/assignment-2/assignment-2.module";
import {Assignment3Module} from "./assignments/assignment-3/assignment-3.module";
import {Assignment4Module} from "./assignments/assignment-4/assignment-4.module";
import {CoreModule} from "./core/core.module";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CoreModule,
		CommonSharedModule,
		Assignment1Module,
		Assignment2Module,
		Assignment3Module,
		Assignment4Module
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
