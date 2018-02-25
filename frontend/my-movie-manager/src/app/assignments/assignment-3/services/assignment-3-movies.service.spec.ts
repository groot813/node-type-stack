import { TestBed, inject } from '@angular/core/testing';

import { Assignment3MoviesService } from './assignment-3-movies.service';

describe('Assignment3MoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Assignment3MoviesService]
    });
  });

  it('should be created', inject([Assignment3MoviesService], (service: Assignment3MoviesService) => {
    expect(service).toBeTruthy();
  }));
});
