import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Assignment3MoviesBucketComponent} from './assignment-3-movies-bucket.component';

describe('Assignment3MoviesBucketComponent', () => {
	let component: Assignment3MoviesBucketComponent;
	let fixture: ComponentFixture<Assignment3MoviesBucketComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Assignment3MoviesBucketComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Assignment3MoviesBucketComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
