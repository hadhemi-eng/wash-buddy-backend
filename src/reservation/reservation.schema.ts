import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Reservation extends Document{

  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: number;

  @Prop()
  date: Date;

  @Prop()
  lieu: string;

  @Prop()
  typeService: string;

  @Prop()
  prix: number;
  @Prop()
  id_garagiste: number;
}
@Schema()
export class DemandeReservation extends Document {
  @Prop()
  clientID: number;
  @Prop()
  reservationID: number;
  @Prop()
  status: string;
}

export const ReservationSchema=SchemaFactory.createForClass(Reservation);
export const DemandeReservationSchema=SchemaFactory.createForClass(DemandeReservation);