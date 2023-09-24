import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Client } from 'src/user/user.schema';
import { ClientInput, UpdateClientInput } from '../input/client.input';

@Injectable()
export class ClientService {
    constructor(@InjectModel(Client.name) private clientModel : Model<Client>){}

    async findAll():Promise<Client[]>{
        return this.clientModel.find().exec();
    }

    async create(createClient: ClientInput):Promise<Client>{
        const clientExistant= await this.fetchUserByEmail(createClient.email)
        if(clientExistant){
            throw new Error("Email déja existe");
        }
        const client= new this.clientModel(createClient);
        return client.save();
    }

    async findOne(_id:string):Promise<Client>{
        return this.clientModel.findOne({ _id });
    }

    async updateClient(updateClientInput: UpdateClientInput,id:string):Promise<Client>{
        const client= await this.clientModel.findById(new Types.ObjectId(id));
        console.log(id);
        console.log(client);
        if(!client){
            throw new Error('Client does not exists!');
        }
        client.name =updateClientInput.name??client.name;
        client.firstName=updateClientInput.firstName??client.firstName;
        client.email=updateClientInput.email??client.email;
        client.phone=updateClientInput.phone??client.phone;
        client.password=updateClientInput.password??client.password;
        client.carType=updateClientInput.carType??client.carType;
        client.isActive=updateClientInput.isActive??client.isActive;
        client.preferences=updateClientInput.preferences??client.preferences;

        return client.save();
    }
    async  fetchUserByEmail(email:string) {
        try {
            const user = await this.clientModel.findOne({ email });
            return user; // This might be null if no user found
        } catch (error) {
            console.error('Error fetching user:', error);
            throw new Error('An error occurred while fetching user.');
        }
    }
    async deleteClient(_id:string):Promise<any>{
        return await  this.clientModel.deleteOne({_id: new Types.ObjectId(_id)});
    }
}
