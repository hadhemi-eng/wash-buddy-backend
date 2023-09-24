import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReservationService } from './reservation.service';
import { ReservationInput, UpdateReservationInput, findReservationInput } from './input/reservation.input';
import { ReservationDto } from './dto/reservation.dto';
import { ReservationModule } from './reservation.module';

@Resolver()
export class ReservationResolver {
    constructor(
        private reservationService :ReservationService,
    ){}
    @Query(()=>[ReservationDto])
    async reservations() {
        return this.reservationService.findAll();
        
    }
    @Mutation(() => ReservationDto)
    async createReservation(@Args('input') input:ReservationInput) {
      return this.reservationService.create(input)
    }
    @Query(()=>ReservationDto)
    async findReservation(@Args('input') input:findReservationInput) {
      const resolvers = {
        Query: {
            findReservationById: (_, { id }) => {
              
    
                const reservation = this.reservationService.findById(id);
                if (!reservation) {
                  return null;
              }
                return reservation;
            }
        }
    }
        return this.reservationService.findById(input._id);
        
    }
    @Mutation(() => ReservationDto)
    async updateReservation(@Args('input') input:UpdateReservationInput) {
      return this.reservationService.update(input);
    }
    @Mutation(() => String)
    async deleteReservation(@Args('input') input:findReservationInput): Promise<any> {
      await this.reservationService.deleteReservation(input._id);
      return "reservation removed";

    }


}
