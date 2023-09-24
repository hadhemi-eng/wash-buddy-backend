import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ClientInput{
  
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

@InputType()
export class UpdateClientInput{
    @Field({nullable:true})
    id?: string;
  
    @Field({nullable:true})
    name?: string;
  
    @Field({nullable:true})
    firstName?: string;
  
    @Field({nullable:true})
    phone?: string;
  
    @Field({nullable:true})
    email?: string;
    
    @Field({nullable:true})
    password?: string  
    
    @Field({nullable:true})
    carType?: string;
    
    @Field({nullable:true})
    isActive?: boolean;
    
    @Field(() => [String],{nullable:true})
    preferences?: [string];
}

@InputType()
export class findClientInput{
@Field()
_id:string;
}