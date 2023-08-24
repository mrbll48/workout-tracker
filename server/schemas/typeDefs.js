const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    friends: [User]
  }

  type Workout {
    userId: ID!
    text: String!
    date: String
    likes: INT
    comments: [Comment]
  }

  type Comment {
    _id: ID
    userId: String
    text: String
    date: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    me: User
    users: [User]
    workout(workoutId: String): Workout #TODO: workoutId needs to match with the query parameter on client side   
    workouts(username: String): [Workout] 
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    postWorkout(text: String!, )
  }
`;

module.exports = typeDefs;
