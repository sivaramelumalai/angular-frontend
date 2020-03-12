import { TestBed } from '@angular/core/testing';

import { BankerViewService } from './banker-view.service';

describe('BankerViewService', () => {
  let service: BankerViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankerViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
