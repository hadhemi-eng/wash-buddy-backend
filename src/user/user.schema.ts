import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@Schema()
export class User extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  firstName: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  password: string 
  @Prop()
  type_user: string
  
  @Prop()
  carType?: string;
  @Prop()
  isActive?: boolean;
  @Prop()
  preferences?: [string];
}

@ObjectType()

export class UserType {
  @Field({nullable:true})
  id: string;

  @Field({nullable:true})
  name!: string;

  @Field({nullable:true})
  firstName!: string;

  @Field({nullable:true})
  phone!: string;

  @Field({nullable:true})
  email!: string;

  @Field({nullable:true})
  password!: string  
  @Field()
  carType: string;
  @Field()
  type_user: string
}

@Schema()
export class Client extends User {
  @Prop()
  carType: string;
}

@ObjectType()
export class ClientType extends UserType {
  @Field()
  name: string;

  @Field()
  firstName: string;

  @Field()
  phone: string;

  @Field()
  email: string;
  
  @Field()
  password: string  
  
  @Field()
  carType: string;
  
  @Field()
  isActive?: boolean;
  
  @Field(() => [String])
  preferences: [string];
}

@Schema()
export class Admin extends User {}

@ObjectType()
export class AdminType extends UserType {}

@Schema()
export class GarageOwner extends User {}

@ObjectType()
export class GarageOwnerType extends UserType {}

@Schema()
export class Partner extends User {}

@ObjectType()
export class PartnerType extends UserType {}
export const UserSchema=SchemaFactory.createForClass(User);
export const ClientSchema=SchemaFactory.createForClass(Client);
export const AdminSchema=SchemaFactory.createForClass(Admin);
export const GarageOwnerSchema=SchemaFactory.createForClass(GarageOwner);
export const PartnerSchema=SchemaFactory.createForClass(Partner);

