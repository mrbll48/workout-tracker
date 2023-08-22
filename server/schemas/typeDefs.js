const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    friends: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    use: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;
1;
module.exports = typeDefs;
