import { TestBed } from '@angular/core/testing';

import { ReservasUsuarioService } from './reservas-usuario.service';

describe('ReservasUsuarioService', () => {
  let service: ReservasUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservasUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
