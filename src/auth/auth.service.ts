import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginUserInput } from './login-user.input';
import { User } from 'src/user/user.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt  from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
         private jwtService:JwtService){}

    async validateUser(email:string,password: string):Promise<any>{
        const user= await this.userService.fetchUserByEmail(email);
        const valid = await bcrypt.compare(password,user?.password);

        if(user && valid){
            const {password,...result}=user;
            return user;
        }
    }
    async login(user: User){
          return {
            access_token:this.jwtService.sign({username:user.email,sub:user.id}),
            user:user

        };
    }
    async signup(user: LoginUserInput){
        const userToFind=await this.userService.fetchUserByEmail(user.email);
        if(user){
            throw new Error('User already exists!');
        }
        const hashedPassword= await bcrypt.hash(user.password,10);
        user.password=hashedPassword;
        console.log(user);
        return this.userService.create({...user,name:"",firstName:"",phone:"",type_user:""

        })
        
  }
}
