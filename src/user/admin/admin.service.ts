import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from '../user.schema';
import { Model, Types } from 'mongoose';
import { AdminInput, FindUserInput } from '../input/user.input';

@Injectable()
export class AdminService {
    constructor(@InjectModel(Admin.name) private adminModel : Model<Admin>){}

    async findAll():Promise<Admin[]>{
        return this.adminModel.find().exec();
    }

    async create(createClient: AdminInput):Promise<Admin>{
        const client= new this.adminModel(createClient);
        return client.save();
    }

    async findOne(client:FindUserInput):Promise<Admin>{
        return this.adminModel.findById(client.id);
    }

    async updateClient(userInput: AdminInput):Promise<Admin>{
        const client= await this.adminModel.findOne(new Types.ObjectId(userInput.id));
        client.name =userInput.name;
        client.firstName=userInput.firstName;
        client.email=userInput.email;
        client.phone=userInput.phone
        return client.save();
    }

    async deleteClient(_id:number):Promise<any>{
        return await  this.adminModel.deleteOne({_id: new Types.ObjectId(_id)});
    }
}
