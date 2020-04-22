import { TestBed } from '@angular/core/testing';

import { CRUDAPIService } from './crud-api.service';

describe('CRUDAPIService', () => {
  let service: CRUDAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
