import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ReservationInput{
@Field()
readonly typeService:string;
@Field()
readonly date: Date;
@Field()
readonly lieu: string;
@Field()
readonly prix: number;
@Field()
readonly id_garagiste: number;
}

@InputType()
export class UpdateReservationInput{
@Field()
readonly _id:string;
@Field()
readonly typeService:string;
}

@InputType()
export class findReservationInput{
@Field()
_id:string;
}
@InputType()
export class DemandeReservationInput{
@Field()
id_demande?:number;
@Field()
clientID: number;
@Field()
reservationID: number;
@Field()
status: string;
}