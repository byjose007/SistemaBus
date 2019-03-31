import { TestBed } from '@angular/core/testing';

import { HorariosService } from './horarios.service';

describe('HorariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorariosService = TestBed.get(HorariosService);
    expect(service).toBeTruthy();
  });
});
