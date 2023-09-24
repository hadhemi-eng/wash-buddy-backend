import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  id?: number;

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
  type_user: string
  
  @Field()
  carType?: string;
}
@InputType()
export class ClientInput extends UserInput {
  @Field()

  carType: string;
}
@InputType()
export class AdminInput extends UserInput {}

@InputType()
export class GarageOwnerInput extends UserInput {}

@InputType()
export class PartnerInput extends UserInput {}
@InputType()
export class FindUserInput {
  @Field({nullable:true})
  id: number;
  @Field({nullable:true})
  email: string;
  @Field({nullable:true})
  type_user: string;
}