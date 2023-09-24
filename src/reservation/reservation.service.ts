import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Reservation } from './reservation.schema';
import { ReservationInput, UpdateReservationInput, findReservationInput } from './input/reservation.input';

@Injectable()
export class ReservationService {
    constructor(@InjectModel(Reservation.name) private reservationModel : Model<Reservation>){}

    async findAll():Promise<Reservation[]>{
        return this.reservationModel.find().exec();
    }

    async create(createReservation: ReservationInput):Promise<Reservation>{
        const reservation= new this.reservationModel(createReservation);
        return reservation.save();
    }

    async findOne(reservation:findReservationInput):Promise<Reservation>{
        const id =reservation._id;

        return this.reservationModel.findById({id: new Types.ObjectId(reservation._id)});
    }
    async findById(_id:string):Promise<Reservation>{
        return this.reservationModel.findById(_id);
    }

    async update(updateReservation: UpdateReservationInput):Promise<Reservation>{
        const reservation= await this.reservationModel.findOne(new Types.ObjectId(updateReservation._id));
        reservation.typeService=updateReservation.typeService
        return reservation.save();
    }

    async deleteReservation(id:string):Promise<any>{
        return await  this.reservationModel.deleteOne({id: new Types.ObjectId(id)});
    }
}
