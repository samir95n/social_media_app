const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const { MONGODB } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("MONGODB Connected");
    return server.listen({
      port: 5000,
    });
  })
  .then((res) => {
    console.log(` Server running at ${res.url}`);
  });
