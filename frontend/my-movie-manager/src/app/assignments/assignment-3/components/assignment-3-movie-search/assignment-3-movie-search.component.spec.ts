import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3MovieSearchComponent } from './assignment-3-movie-search.component';

describe('Assignment3MovieSearchComponent', () => {
  let component: Assignment3MovieSearchComponent;
  let fixture: ComponentFixture<Assignment3MovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment3MovieSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
