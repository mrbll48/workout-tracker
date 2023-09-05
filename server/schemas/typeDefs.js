const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    friends: [User]
    workouts: [Workout]
    photos: [Photo]
  }

  type Workout {
    _id: ID
    postedBy: String!
    exercise: String!
    weight: String!
    sets: String!
    reps: String!
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

  type Photo {
    _id: ID
    title: String
    description: String
    url: String
    by: String
  }

  input WorkoutInput {
    exercise: String!
    sets: String!
    reps: String!
    date: String
  }

  type Query {
    me: User
    user(username: String): User
    users: [User]
    workout(workoutId: String): Workout
    workouts(userId: String): [Workout]
    photos: [Photo]
    friends: [User]
  }

  type Mutation {
    # tested functional mutations
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    postWorkout(
      exercise: String!
      sets: String!
      reps: String!
      weight: String!
    ): Workout
    updateUser(username: String, email: String, password: String): User
    deleteUser: User
    updateWorkout(workoutId: ID!, workoutDetails: WorkoutInput): Workout
    deleteWorkout(workoutId: ID!): Workout
    addComment(
      workoutId: ID
      commentText: String
      commentAuthor: String
    ): Workout
    addPhoto(title: String, description: String, url: String, by: String): Photo
    deleteFriend(_id: ID): User

    # untested mutations
    # addLike(): Workout
    addFriend(_id: ID): User
  }
`;

module.exports = typeDefs;
