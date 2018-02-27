import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Assignment2MoviesBucketComponent} from './assignment-2-movies-bucket.component';

describe('Assignment2MoviesBucketComponent', () => {
	let component: Assignment2MoviesBucketComponent;
	let fixture: ComponentFixture<Assignment2MoviesBucketComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Assignment2MoviesBucketComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Assignment2MoviesBucketComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
