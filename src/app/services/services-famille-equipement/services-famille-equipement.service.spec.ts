import { TestBed } from '@angular/core/testing';

import { ServicesFamilleEquipementService } from './services-famille-equipement.service';

describe('ServicesFamilleEquipementService', () => {
  let service: ServicesFamilleEquipementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesFamilleEquipementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
