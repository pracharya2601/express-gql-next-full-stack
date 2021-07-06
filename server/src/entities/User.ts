import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass, pre } from '@typegoose/typegoose';
import bcrypt from "bcrypt";


@pre<User>("save", async function (next: any) {
  if (this.isModified("password")) {
    const pass: string = this.password.toString();  //converting String type into string
    this.password = await bcrypt.hash(pass, 12);
  }
  next()
})


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

  //we dont need password to query so don't need to assign as a field
  @Property()
  password: String

  @Field()
  @Property({ default: new Date(), required: true, nullable: true })
  accountCreated: Date;

}


export const UserModel = getModelForClass(User);
