import { TestBed, inject } from '@angular/core/testing';

import { SearchboxServiceService } from './searchbox-service.service';

describe('SearchboxServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchboxServiceService]
    });
  });

  it('should be created', inject([SearchboxServiceService], (service: SearchboxServiceService) => {
    expect(service).toBeTruthy();
  }));
});
