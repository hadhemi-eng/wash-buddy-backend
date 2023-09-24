import { ClientType } from "src/user/user.schema";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {  FindUserInput } from "src/user/input/user.input";
import { ClientService } from "./client.service";
import { ClientInput, UpdateClientInput, findClientInput } from "../input/client.input";

@Resolver()
export class ClientResolver { constructor(
    private clientService :ClientService

){}
@Query(()=>[ClientType])
async clients() {
    return this.clientService.findAll();
    
}
@Mutation(() => ClientType)
async createClient(@Args('input') input:ClientInput) {
  return this.clientService.create(input)
}
@Query(()=>ClientType)
async findClient(@Args('input') input:string) {
    return this.clientService.findOne(input);
    
}
@Mutation(() => ClientType)
async updateClient(@Args('input') input:UpdateClientInput,@Args('id') id:string) {
  return this.clientService.updateClient(input,id);
}
@Mutation(() => String)
async deleteClient(@Args('id') id:string): Promise<any> {
  await this.clientService.deleteClient(id);
  return "reservation removed";

}}