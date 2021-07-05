import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Item, ItemModel } from "../entities/Item";
import { ItemInput } from "./types/item-input";


@Resolver()
export class ItemResolvers {

  @Query(_returns => Item, { nullable: false })
  async returnSingleItem(@Arg("id") id: string) {
    return await ItemModel.findById({ _id: id })
  }

  @Query(() => [Item])
  async returnAllItem() {
    return await ItemModel.find();
  }

  @Query(() => Boolean)
  async deleteItem(@Arg("id") id: string) {
    const item = await ItemModel.findById({ _id: id })
    await item?.remove();

    return true;
  }

  @Mutation(() => Item)
  async createItem(@Arg("data") { name, description }: ItemInput): Promise<Item> {
    const item = (await ItemModel.create({
      name,
      description
    })).save();

    return item;
  }

}