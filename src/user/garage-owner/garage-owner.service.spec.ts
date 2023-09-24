import { Test, TestingModule } from '@nestjs/testing';
import { GarageOwnerService } from './garage-owner.service';

describe('GarageOwnerService', () => {
  let service: GarageOwnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GarageOwnerService],
    }).compile();

    service = module.get<GarageOwnerService>(GarageOwnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
