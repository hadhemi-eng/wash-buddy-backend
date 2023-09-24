import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GarageOwner } from '../user.schema';
import { Model, Types } from 'mongoose';
import { FindUserInput, GarageOwnerInput } from '../input/user.input';

@Injectable()
export class GarageOwnerService {
    constructor(@InjectModel(GarageOwner.name) private garageOwnerModel : Model<GarageOwner>){}

    async findAll():Promise<GarageOwner[]>{
        return this.garageOwnerModel.find().exec();
    }

    async create(createGarageOwner: GarageOwnerInput):Promise<GarageOwner>{
        const garageOwner= new this.garageOwnerModel(createGarageOwner);
        return garageOwner.save();
    }

    async findOne(garageOwner:FindUserInput):Promise<GarageOwner>{
        return this.garageOwnerModel.findById(garageOwner.id);
    }

    async updateGarageOwner(userInput: GarageOwnerInput):Promise<GarageOwner>{
        const garageOwner= await this.garageOwnerModel.findOne(new Types.ObjectId(userInput.id));
        garageOwner.name =userInput.name;
        garageOwner.firstName=userInput.firstName;
        garageOwner.email=userInput.email;
        garageOwner.phone=userInput.phone
        return garageOwner.save();
    }

    async deleteGarageOwner(_id:number):Promise<any>{
        return await  this.garageOwnerModel.deleteOne({_id: new Types.ObjectId(_id)});
    }
}
