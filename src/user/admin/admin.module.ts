import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from '../user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Admin.name,schema:AdminSchema}])],

  providers: [AdminService, AdminResolver]
})
export class AdminModule {}
