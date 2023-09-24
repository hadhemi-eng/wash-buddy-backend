import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DemandeReservationService } from './demande-reservation.service';
import { DemandeReservationDto } from '../dto/reservation.dto';
import { DemandeReservationInput } from '../input/reservation.input';

@Resolver()
export class DemandeReservationResolver {
    constructor(
        private demadneReservationService :DemandeReservationService,
    ){}
    @Query(()=>[DemandeReservationDto])
    async reservations() {
        return this.demadneReservationService.findAll();
        
    }
    @Mutation(() => DemandeReservationDto)
    async createDemandeReservation(@Args('input') input:DemandeReservationInput) {
      return this.demadneReservationService.create(input)
    }
    @Query(()=>DemandeReservationDto)
    async findDemandeReservation(@Args('input') input:DemandeReservationInput) {
      const resolvers = {
        Query: {
            findReservationById: (_, { id }) => {
              
    
                const reservation = this.demadneReservationService.findById(id);
                if (!reservation) {
                  return null;
              }
                return reservation;
            }
        }
    }
        return this.demadneReservationService.findById(input.id_demande);
        
    }
    @Mutation(() => DemandeReservationDto)
    async updateDemandeReservation(@Args('input') input:DemandeReservationInput) {
      return this.demadneReservationService.update(input);
    }
    @Mutation(() => String)
    async deleteDemandeReservation(@Args('input') input:DemandeReservationInput): Promise<any> {
      await this.demadneReservationService.deleteDemande(input.id_demande);
      return "reservation removed";
    
    }
}
