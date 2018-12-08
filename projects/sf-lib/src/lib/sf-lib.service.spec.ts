import { TestBed, inject } from '@angular/core/testing';

import { SfLibService } from './sf-lib.service';

describe('SfLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SfLibService]
    });
  });

  it('should be created', inject([SfLibService], (service: SfLibService) => {
    expect(service).toBeTruthy();
  }));
});
