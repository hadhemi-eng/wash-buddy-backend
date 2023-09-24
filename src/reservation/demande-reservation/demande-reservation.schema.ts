import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class DemandeReservation extends Document {
  @Prop()
  clientID: number;
  @Prop()
  reservationID: number;
  @Prop()
  status: string;
}

export const DemandeReservationSchema=SchemaFactory.createForClass(DemandeReservation);