import { TestBed } from '@angular/core/testing';

import { AdminAPIService } from './Admin-api.service';

describe('ProjectManagementAPIService', () => {
  let service: AdminAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
