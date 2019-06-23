import { TestBed, inject } from '@angular/core/testing';

import { FetchtvshowlistService } from './fetchtvshowlist.service';

describe('FetchtvshowlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchtvshowlistService]
    });
  });

  it('should be created', inject([FetchtvshowlistService], (service: FetchtvshowlistService) => {
    expect(service).toBeTruthy();
  }));
});
