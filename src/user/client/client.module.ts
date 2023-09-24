import { Module } from '@nestjs/common';
import { ClientResolver } from './client.resolver';
import { ClientService } from './client.service';
import { Client, ClientSchema } from '../user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name:Client.name,schema:ClientSchema}])],
  providers: [ClientResolver, ClientService]
})
export class ClientModule {}
