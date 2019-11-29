import { TestBed } from '@angular/core/testing';

import { AvailabilityCalenderService } from './availability-calender.service';

describe('AvailabilityCalenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailabilityCalenderService = TestBed.get(AvailabilityCalenderService);
    expect(service).toBeTruthy();
  });
});
