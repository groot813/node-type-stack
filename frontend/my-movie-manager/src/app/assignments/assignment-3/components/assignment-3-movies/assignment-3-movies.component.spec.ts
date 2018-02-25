import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3MoviesComponent } from './assignment-3-movies.component';

describe('Assignment3MoviesComponent', () => {
  let component: Assignment3MoviesComponent;
  let fixture: ComponentFixture<Assignment3MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment3MoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
