import { Field, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class ReservationDto{
    @Field()
     _id:number;
    @Field()
     typeService:string;
    @Field({nullable:true})
     date:Date;
     @Field()
     id_garagiste: number;
     @Field()
     lieu: string;
     @Field()
     prix:string;
    }

    @ObjectType()
    export class DemandeReservationDto{
    @Field()
    clientID: number;
    @Field()
    reservationID: number;
    @Field()
    status: string;
    }