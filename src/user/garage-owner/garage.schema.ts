import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Garage extends Document {
@Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
    id: number;
  @Prop()
  name: string;
  @Prop()
  longitude: string;
  @Prop()
  latitude: string;
  @Prop()
  owner_id: number;
}

@ObjectType()
export class GarageType  {
  @Field({nullable:true})
  id: number;
  @Field()
  name: string;
  @Field()
  longitude: string;
  @Field()
  latitude: string;
  @Field()
  owner_id: number;
}
export const GarageSchema=SchemaFactory.createForClass(Garage);
