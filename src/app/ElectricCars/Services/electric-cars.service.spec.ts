import { TestBed } from '@angular/core/testing';

import { ElectricCarsService } from './electric-cars.service';

describe('ElectricCarsService', () => {
  let service: ElectricCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
