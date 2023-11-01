import { TestBed } from '@angular/core/testing';

import { GServeService } from './g-serve.service';

describe('GServeService', () => {
  let service: GServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
