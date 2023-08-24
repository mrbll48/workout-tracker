const { AuthenticationError } = require("apollo-server-express");
const { User, Workout } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLError } = require("graphql");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new GraphQLError("You are not signed in");
    },
    workout: async (parent, { workoutId }) => {
      console.log(workoutId);
      return Workout.findOne({ _id: workoutId });
    },
    workouts: async (parent, { username }) => {
      console.log(username);
      const params = username ? { username } : {};
      return Workout.find({ params });
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log(user);
      return { token, user };
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }

      const correctPw = await user.isValidPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    postWorkout: async (_, { text }, context) => {
      console.log(text);

      const workoutDate = Date.now;
      const workout = await Workout.create({ text, workoutDate });

      console.log(workout);
      await User.findOneAndUpdate(
        {
          username: context.user.username,
        },
        { $addToSet: { workouts: workout._id } }
      );
      return workout;
    },
    // new operations: update user & workout, delete user & workout
    updateUser: async (_, { username, email, password }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in");
      }
      return await User.findByIdAndUpdate(
        context.user._id,
        { username, email, password },
        { new: true }
      );
    },
    deleteUser: async (_, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in");
      }
      return await User.findByIdAndDelete(context.user._id);
    },
    updateWorkout: async (_, { workoutId, workoutDetails }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return await Workout.findByIdAndUpdate(
        workoutId,
        { ...workoutDetails },
        { new: true }
      );
    },
    deleteWorkout: async (_, { workoutId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return await Workout.findByIdAndDelete(workoutId);
    },
  },
};

module.exports = resolvers;
