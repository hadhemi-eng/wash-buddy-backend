import { Module } from '@nestjs/common';
import { ReservationResolver } from './reservation.resolver';
import { ReservationService } from './reservation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './reservation.schema';
import { DemandeReservationModule } from './demande-reservation/demande-reservation.module';

@Module({
  imports: [MongooseModule.forFeature([{name:Reservation.name,schema:ReservationSchema}]), DemandeReservationModule],
  providers: [ReservationResolver, ReservationService, ]
})
export class ReservationModule {}
