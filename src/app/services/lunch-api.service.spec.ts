import { TestBed } from '@angular/core/testing';

import { LunchApiService } from './lunch-api.service';

describe('LunchApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LunchApiService = TestBed.get(LunchApiService);
    expect(service).toBeTruthy();
  });
});
