import express from "express";
import * as db from "./db";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";

db.connect();
const server = new ApolloServer({ typeDefs, resolvers });
startStandaloneServer(server).then(({ url }) => {
  console.log(`🚀 Server ready at http://localhost:4000${url}`);
});
