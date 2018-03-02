import { TestBed, inject } from '@angular/core/testing';

import { DataQuananService } from './data-quanan.service';

describe('DataQuananService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataQuananService]
    });
  });

  it('should be created', inject([DataQuananService], (service: DataQuananService) => {
    expect(service).toBeTruthy();
  }));
});
