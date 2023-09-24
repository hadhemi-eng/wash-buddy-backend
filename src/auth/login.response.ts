import { Field, ObjectType } from "@nestjs/graphql";
import { UserType } from "src/user/user.schema";
@ObjectType()
export class LoginResponse{
    @Field()
    access_token:string;
    @Field(()=> UserType)
    user: UserType;
}