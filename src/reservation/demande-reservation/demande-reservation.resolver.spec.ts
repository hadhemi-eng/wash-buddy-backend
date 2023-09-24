import { Test, TestingModule } from '@nestjs/testing';
import { DemandeReservationResolver } from './demande-reservation.resolver';

describe('DemandeReservationResolver', () => {
  let resolver: DemandeReservationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandeReservationResolver],
    }).compile();

    resolver = module.get<DemandeReservationResolver>(DemandeReservationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
