import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GarageOwnerService } from './garage-owner.service';
import { GarageOwnerType } from '../user.schema';
import { FindUserInput, GarageOwnerInput } from '../input/user.input';

@Resolver()
export class GarageOwnerResolver { constructor(
    private garageOwnerService :GarageOwnerService

){}
@Query(()=>[GarageOwnerType])
async garageOwners() {
    return this.garageOwnerService.findAll();
    
}
@Mutation(() => GarageOwnerType)
async createGarageOwner(@Args('input') input:GarageOwnerInput) {
  return this.garageOwnerService.create(input)
}
@Query(()=>[GarageOwnerType])
async findGarageOwner(@Args('input') input:FindUserInput) {
    return this.garageOwnerService.findOne(input);
    
}
@Mutation(() => GarageOwnerType)
async updateGarageOwner(@Args('input') input:GarageOwnerInput) {
  return this.garageOwnerService.updateGarageOwner(input);
}
@Mutation(() => String)
async deleteGarageOwner(@Args('input') input:FindUserInput): Promise<any> {
  await this.garageOwnerService.deleteGarageOwner(input.id);
  return "garage Owner removed";

}}
