import express from "express";
import * as db from "./db";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";

db.connect();
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
