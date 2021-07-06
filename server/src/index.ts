import "reflect-metadata";
import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
import { ItemResolvers } from "./resolvers/ItemResolvers";
import { UserResolvers } from "./resolvers/UserResolvers";



const server = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ItemResolvers, UserResolvers],
      emitSchemaFile: true,
      validate: false,
    })
  });
  const PORT = 4000;

  const mongoose = await connect('mongodb+srv://measaprakash:SGcVdThRsPTi9yyK@cluster0.na3gx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
  await mongoose.connection;
  //mongodb+srv://<username>:<password>@cluster0.na3gx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  //'mongodb://localhost:27017/test

  apolloServer.applyMiddleware({ app })
  app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
  })
}

server().catch(error => {
  console.error(error)
})

