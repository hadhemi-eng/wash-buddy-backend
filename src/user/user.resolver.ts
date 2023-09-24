import { Query,Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UserType } from './user.schema';
import { FindUserInput, UserInput } from './input/user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Resolver()
export class UserResolver { constructor(
    private userService :UserService

){}
@Query(()=>[UserType])
@UseGuards(JwtAuthGuard)
async users() {
    return this.userService.findAll();
    
}
@Mutation(() => UserType)
async createUser(@Args('input') input:UserInput) {
  return this.userService.create(input)
}

@Query(()=>UserType)
async findUser(@Args('input') input:FindUserInput): Promise<User> {
    return this.userService.findOne(input);
    
}
@Query(()=>UserType)
async findUserByEmail(@Args('input') input:FindUserInput): Promise<User> {
    return this.userService.fetchUserByEmail(input.email);
    
}
@Query(()=>UserType)
async findUserByUserType(@Args('input') input:FindUserInput): Promise<User> {
    return this.userService.fetchUserByUserType(input.type_user);
    
}

@Mutation(() => UserType)
async updateUser(@Args('input') input:UserInput) {
  return this.userService.updateUser(input);
}
@Mutation(() => String)
async deleteUser(@Args('input') input:FindUserInput): Promise<any> {
  await this.userService.deleteUser(input.id);
  return "reservation removed";

}
}
