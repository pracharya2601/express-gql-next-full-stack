import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { User, UserModel } from "../entities/User";
import { UserInput } from "./types/user-input";


@Resolver()
export class UserResolvers {

  @Query(_return => User, { nullable: false })
  async getSingleUser(@Arg("id") id: string) {
    return await UserModel.findById({ _id: id })
  }

  @Mutation(() => User)
  async createUser(@Arg("data") { name, email, password }: UserInput): Promise<User> {

    const user = (await UserModel.create({
      name,
      email,
      password
    })).save();

    return user;
  }

  @Mutation(() => Boolean)
  async deleteItem(@Arg("id") id: string) {
    await UserModel.deleteOne({ id });

    return true;
  }


}