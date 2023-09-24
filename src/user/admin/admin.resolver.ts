import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminType } from '../user.schema';
import { AdminInput, FindUserInput } from '../input/user.input';

@Resolver()
export class AdminResolver {constructor(
    private adminService :AdminService

){}
@Query(()=>[AdminType])
async admins() {
    return this.adminService.findAll();
    
}
@Mutation(() => AdminType)
async createAdmin(@Args('input') input:AdminInput) {
  return this.adminService.create(input)
}
@Query(()=>[AdminType])
async findAdmin(@Args('input') input:FindUserInput) {
    return this.adminService.findOne(input);
    
}
@Mutation(() => AdminType)
async updateAdmin(@Args('input') input:AdminInput) {
  return this.adminService.updateClient(input);
}
@Mutation(() => String)
async deleteAdmin(@Args('input') input:FindUserInput): Promise<any> {
  await this.adminService.deleteClient(input.id);
  return "reservation removed";

}}
