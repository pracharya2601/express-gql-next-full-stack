import { InputType, Field } from "type-graphql";
import { Item } from "src/entities/Item";

@InputType()
export class ItemInput implements Partial<Item> {

  @Field()
  name: string;

  @Field()
  description: string;

}
