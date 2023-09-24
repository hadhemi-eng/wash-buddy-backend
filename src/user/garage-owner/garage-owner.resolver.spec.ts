import { Test, TestingModule } from '@nestjs/testing';
import { GarageOwnerResolver } from './garage-owner.resolver';

describe('GarageOwnerResolver', () => {
  let resolver: GarageOwnerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GarageOwnerResolver],
    }).compile();

    resolver = module.get<GarageOwnerResolver>(GarageOwnerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
