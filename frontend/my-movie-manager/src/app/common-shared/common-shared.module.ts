import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatTabsModule} from "@angular/material";
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonSharedDescriptionBlockComponent } from './components/common-shared-description-block/common-shared-description-block.component';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatListModule,
		MatInputModule,
		MatTabsModule,
		MatCardModule,
		MatGridListModule,
	],
	exports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatListModule,
		MatInputModule,
		MatTabsModule,
		MatCardModule,
		MatGridListModule,
		CommonSharedDescriptionBlockComponent
	],
	declarations: [CommonSharedDescriptionBlockComponent]
})
export class CommonSharedModule {
}
