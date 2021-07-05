import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from '@typegoose/typegoose';


@ObjectType({ description: 'User Model' })
export class User {

  @Field(() => ID)
  id: number;

  @Field()
  @Property()
  name: String

  @Field()
  @Property({ required: true })
  email: String;

  @Field()
  @Property()
  password: String

  @Field()
  @Property({ default: new Date(), required: true, nullable: true })
  accountCreated: Date;

}

export const UserModel = getModelForClass(User);