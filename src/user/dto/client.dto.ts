import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ClientType {
  @Field()
  id: number;

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
  active?: boolean;
  
  @Field()
  preferences: string[];
}
@ObjectType()
export class ClientPersonalInfos {

  @Field()
  name: string;

  @Field()
  firstName: string;

  @Field()
  phone: string;

  @Field()
  email: string;
  @Field()
  active?: boolean;
  
  @Field()
  preferences: string[];
}