import { TestBed } from '@angular/core/testing';

import { MethodServiceService } from './method-service.service';

describe('MethodServiceService', () => {
  let service: MethodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
