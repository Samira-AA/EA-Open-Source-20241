import { TestBed } from '@angular/core/testing';

import { NursingApiServiceService } from './nursing-api.service.service';

describe('NursingApiServiceService', () => {
  let service: NursingApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursingApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
