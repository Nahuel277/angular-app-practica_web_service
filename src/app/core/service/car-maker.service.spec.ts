import { TestBed } from '@angular/core/testing';

import { CarMakerService } from './car-maker.service';

describe('CarMakerService', () => {
  let service: CarMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
