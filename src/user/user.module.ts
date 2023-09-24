import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { PartnerModule } from './partner/partner.module';
import { GarageOwnerModule } from './garage-owner/garage-owner.module';

@Module({
  imports: [MongooseModule.forFeature([{name:User.name,schema:UserSchema}]), AdminModule, ClientModule, PartnerModule, GarageOwnerModule],

  providers: [UserResolver, UserService],
  exports:[UserService]
})
export class UserModule {}
