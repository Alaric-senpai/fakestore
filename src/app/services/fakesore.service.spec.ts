import { TestBed } from '@angular/core/testing';

import { FakesoreService } from './fakesore.service';

describe('FakesoreService', () => {
  let service: FakesoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakesoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
