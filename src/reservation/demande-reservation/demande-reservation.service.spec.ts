import { Test, TestingModule } from '@nestjs/testing';
import { DemandeReservationService } from './demande-reservation.service';

describe('DemandeReservationService', () => {
  let service: DemandeReservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandeReservationService],
    }).compile();

    service = module.get<DemandeReservationService>(DemandeReservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
