const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   TODO: add authorization middleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
