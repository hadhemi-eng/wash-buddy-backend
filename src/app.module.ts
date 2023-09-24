import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationModule } from './reservation/reservation.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { ClientModule } from './user/client/client.module';
import { AdminModule } from './user/admin/admin.module';
import { PartnerModule } from './user/partner/partner.module';
import { GarageOwnerModule } from './user/garage-owner/garage-owner.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:true,
    })
    ,
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ReservationModule,
    UserModule,
    ClientModule,
    AdminModule,
    PartnerModule,
    GarageOwnerModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
