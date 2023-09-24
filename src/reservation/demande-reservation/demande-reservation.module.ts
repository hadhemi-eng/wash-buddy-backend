import { Module } from '@nestjs/common';
import { DemandeReservationResolver } from './demande-reservation.resolver';
import { DemandeReservationService } from './demande-reservation.service';
import { DemandeReservationSchema } from './demande-reservation.schema';
import { DemandeReservation } from '../reservation.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:DemandeReservation.name,schema:DemandeReservationSchema}])],

  providers: [DemandeReservationResolver, DemandeReservationService]
})
export class DemandeReservationModule {}
