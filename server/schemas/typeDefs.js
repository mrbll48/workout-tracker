const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    friends: [User]
    workouts: [Workout]
  }

  type Workout {
    userId: ID!
    text: String!
    date: String
    likes: Int
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

  input WorkoutInput {
    text: String!
    date: String!
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
    postWorkout(text: String!, date: String!): Workout

  updateUser(username: String, email: String, password: String): User
  deleteUser: User
  updateWorkout(workoutId: ID!, workoutDetails: WorkoutInput): Workout
  deleteWorkout(workoutId: ID!): Workout
  }
`;

module.exports = typeDefs;
