import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: "Item Model" })
export class Item {

  @Field(() => ID)
  id: number;

  @Field()
  @Property({ required: true })
  name: String

  @Field()
  @Property({ required: true })
  description: String;

  @Field()
  @Property({ required: true })
  user_id: string

}

export const ItemModel = getModelForClass(Item);