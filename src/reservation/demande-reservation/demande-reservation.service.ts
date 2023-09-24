import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DemandeReservation } from '../reservation.schema';
import { Model, Types } from 'mongoose';
import { DemandeReservationInput, findReservationInput } from '../input/reservation.input';

@Injectable()
export class DemandeReservationService {
    constructor(@InjectModel(DemandeReservation.name) private demandeReservationModel : Model<DemandeReservation>){}

    async findAll():Promise<DemandeReservation[]>{
        return this.demandeReservationModel.find().exec();
    }

    async create(createDemande: DemandeReservationInput):Promise<DemandeReservation>{
        const demande= new this.demandeReservationModel(createDemande);
        return demande.save();
    }

    async findOne(demande:findReservationInput):Promise<DemandeReservation>{
        const id =demande._id;

        return this.demandeReservationModel.findById({id: new Types.ObjectId(demande._id)});
    }
    async findById(_id:number):Promise<DemandeReservation>{
        return this.demandeReservationModel.findById(_id);
    }

    async update(updateDemande: DemandeReservationInput):Promise<DemandeReservation>{
        const demadneReservation= await this.demandeReservationModel.findOne(new Types.ObjectId(updateDemande.id_demande));
        demadneReservation.clientID=updateDemande.clientID;
        demadneReservation.reservationID=updateDemande.reservationID;
        demadneReservation.status=updateDemande.status;
        return demadneReservation.save();
    }

    async deleteDemande(id:number):Promise<any>{
        return await  this.demandeReservationModel.deleteOne({id: new Types.ObjectId(id)});
    }
}
