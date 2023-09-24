import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './login.response';
import { LoginUserInput } from './login-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';
import { User, UserType } from 'src/user/user.schema';

@Resolver()
export class AuthResolver {
    constructor(private authService : AuthService){}
    @Mutation(()=>LoginResponse)
    @UseGuards(GqlAuthGuard)
    Login(@Args('loginUserInput')loginUserInput: LoginUserInput,@Context() context){
        return this.authService.login(context.user);
    }
    @Mutation(()=>UserType)
    signup(@Args('loginUserInput')loginUserInput: LoginUserInput){
        return this.authService.signup(loginUserInput);
    }
}
