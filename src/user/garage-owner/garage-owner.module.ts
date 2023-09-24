import { Module } from '@nestjs/common';
import { GarageOwnerResolver } from './garage-owner.resolver';
import { GarageOwnerService } from './garage-owner.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GarageOwner, GarageOwnerSchema } from '../user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:GarageOwner.name,schema:GarageOwnerSchema}])],
  providers: [GarageOwnerResolver, GarageOwnerService]
})
export class GarageOwnerModule {}
