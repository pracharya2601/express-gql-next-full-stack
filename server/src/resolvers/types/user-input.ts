import { User } from "src/entities/User";
import { InputType, Field } from "type-graphql";

@InputType()
export class UserInput implements Partial<User> {

  @Field()
  name: String;

  @Field()
  email: String;

  @Field()
  password: String;

}