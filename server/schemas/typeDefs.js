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
    _id: ID
    exercise: String!
    sets: String!
    reps: String
    likes: Int #TODO: figure out how to add likes to workouts
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  input WorkoutInput {
    exercise: String!
    sets: String!
    reps: String!
    date: String
  }

  type Query {
    me: User
    users: [User]
    workout(workoutId: String): Workout
    workouts(userId: String): [Workout]
  }

  type Mutation {
    # tested functional mutations
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    postWorkout(exercise: String!, sets: String!, reps: String!): Workout
    updateUser(username: String, email: String, password: String): User
    deleteUser: User
    updateWorkout(workoutId: ID!, workoutDetails: WorkoutInput): Workout
    deleteWorkout(workoutId: ID!): Workout
    addComment(
      workoutId: ID
      commentText: String
      commentAuthor: String
    ): Workout

    # untested mutations
    # addLike(): Workout
  }
`;

module.exports = typeDefs;
