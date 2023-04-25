import { TestBed } from '@angular/core/testing';

import { BankerService } from './banker.service';

describe('BancherService', () => {
  let service: BankerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
