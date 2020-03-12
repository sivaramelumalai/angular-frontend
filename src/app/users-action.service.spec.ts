import { TestBed } from '@angular/core/testing';

import { UsersActionService } from './users-action.service';

describe('UsersActionService', () => {
  let service: UsersActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
