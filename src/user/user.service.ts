import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserType } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindUserInput, UserInput } from './input/user.input';
import * as bcrypt  from "bcrypt";
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel : Model<User>){}

    async findAll():Promise<User[]>{
        return this.userModel.find().exec();
    }

    async create(createUser: UserInput):Promise<User>{
        const userToFind=await this.fetchUserByEmail(createUser.email);
        if(userToFind){
            throw new Error('User already exists!');
        }
        const hashedPassword= await bcrypt.hash(createUser.password,10);
        createUser.password=hashedPassword;
        const user= new this.userModel(createUser);
        console.log(user);
        return user.save();
    }

    async findOne(user:FindUserInput):Promise<User>{

     const userFound = this.userModel.findOne(user);
     if (!userFound) throw new Error('User not found')

    return userFound;

    }
    

    async updateUser(userInput: UserInput):Promise<User>{
        const user= await this.userModel.findOne(new Types.ObjectId(userInput.id));
        user.name =userInput.name;
        user.firstName=userInput.firstName;
        user.email=userInput.email;
        user.phone=userInput.phone
        return user.save();
    }

    async deleteUser(_id:number):Promise<any>{
        return await  this.userModel.deleteOne({_id: new Types.ObjectId(_id)});
    }
    async  fetchUserByEmail(email:string) {
        try {
            const user = await this.userModel.findOne({ email });
            return user; // This might be null if no user found
        } catch (error) {
            console.error('Error fetching user:', error);
            throw new Error('An error occurred while fetching user.');
        }
    }
    async  fetchUserByUserType(type_user:string) {
        try {
            const user = await this.userModel.findOne({ type_user });
            return user; // This might be null if no user found
        } catch (error) {
            console.error('Error fetching user:', error);
            throw new Error('An error occurred while fetching user.');
        }
    }
    
}
