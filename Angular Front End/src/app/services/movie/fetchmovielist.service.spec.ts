import { TestBed, inject } from '@angular/core/testing';

import { FetchmovielistService } from './fetchmovielist.service';

describe('FetchmovielistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchmovielistService]
    });
  });

  it('should be created', inject([FetchmovielistService], (service: FetchmovielistService) => {
    expect(service).toBeTruthy();
  }));
});
