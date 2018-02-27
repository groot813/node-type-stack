import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Assignment4MoviesComponent} from './assignment-4-movies.component';

describe('Assignment4MoviesComponent', () => {
	let component: Assignment4MoviesComponent;
	let fixture: ComponentFixture<Assignment4MoviesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Assignment4MoviesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Assignment4MoviesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
