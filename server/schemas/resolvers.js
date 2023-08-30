const { AuthenticationError } = require("apollo-server-express");
const { User, Workout, Photos } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLError } = require("graphql");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).populate(
          "workouts"
        );
      }
      throw new GraphQLError("You are not signed in");
    },
    workout: async (parent, { workoutId }) => {
      const params = workoutId ? { workoutId } : {};
      console.log(params);
      return Workout.find(params);
    },
    workouts: async (parent, { userId }) => {
      console.log(userId);
      return Workout.find();
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
    postWorkout: async (_, { exercise, sets, reps }, context) => {
      // console.log(text, context.user._id);

      const user = context.user._id;
      console.log(user);
      const workout = await Workout.create({ exercise, sets, reps });

      // console.log(workout);
      await User.findOneAndUpdate(
        {
          _id: user,
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
      console.log(workoutDetails);
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
    addComment: async (
      _,
      { workoutId, commentText, commentAuthor },
      context
    ) => {
      if (context.user) {
        return await Workout.findOneAndUpdate(
          { _id: workoutId },
          { $addToSet: { comments: { commentText, commentAuthor } } },
          { new: true }
        ).populate("comments");
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // addLike: async () => {},
    addPhoto: async (_, { picture }, context) => {
      const pic = Photos.create({ picture });
      console.log(pic);
      return pic;
    },
  },
};

module.exports = resolvers;
