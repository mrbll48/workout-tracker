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
  },
};

module.exports = resolvers;
