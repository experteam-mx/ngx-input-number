import { TestBed } from '@angular/core/testing';

import { NgxInputNumberService } from './ngx-input-number.service';

describe('NgxInputNumberService', () => {
  let service: NgxInputNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInputNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
