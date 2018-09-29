import { TestBed } from '@angular/core/testing';

import { tshirtService } from './tshirt.service';

describe('TshirtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: tshirtService = TestBed.get(tshirtService);
    expect(service).toBeTruthy();
  });
});
