const { AuthenticationError } = require("apollo-server-express");
const { User, Workout, Photos } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLError } = require("graphql");
const Photo = require("../models/Photos");

const resolvers = {
  Query: {
    friends: async (parent, args, context) => {
      console.log(context.user);
      return friends;
    },
    me: async (_, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .populate("workouts")
          .populate("photos")
          .populate({ path: "friends", populate: { path: "workouts" } });
        return user;
      }
      throw new GraphQLError("You are not signed in");
    },

    user: async (_, { username }) => {
      const user = await User.findOne({ username: username })
        .populate("workouts")
        .populate("photos")
        .populate("friends");
      return user;
    },
    users: async (_, args) => {
      const users = await User.find()
        .populate("workouts")
        .populate("photos")
        .populate("friends");

      return users;
    },
    workout: async (parent, { workoutId }) => {
      const params = workoutId ? { workoutId } : {};

      return Workout.find(params);
    },
    workouts: async (parent, { userId }) => {
      return Workout.find();
    },
    photos: async (_, args) => {
      return Photo.find();
    },
  },

  Mutation: {
    addFriend: async (_, { _id }, context) => {
      const user = context.user._id;
      console.log(user);

      const friend = await User.findByIdAndUpdate(
        { _id: user },
        { $addToSet: { friends: _id } },
        { new: true }
      );
      console.log(friend);
      return friend;
    },
    deleteFriend: async (_, { _id }, context) => {
      const user = context.user._id;
      const friend = await User.findByIdAndUpdate(
        { _id: user },
        { $pull: { friends: _id } }
      );
    },
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

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
    postWorkout: async (_, { exercise, sets, reps, weight }, context) => {
      const user = context.user._id;

      const workout = await Workout.create({
        exercise,
        sets,
        reps,
        weight,
        postedBy: context.user.username,
      });

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
    addComment: async (_, { photoId, commentText, by }, context) => {
      if (context.user) {
        return await Photo.findOneAndUpdate(
          { _id: photoId },
          { $addToSet: { comments: { commentText, by } } },
          { new: true }
        ).populate("comments");
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // addLike: async () => {},
    addPhoto: async (_, { title, description, url }, context) => {
      const username = context.user.username;
      const pic = await Photos.create({
        title,
        description,
        url,
        by: username,
      });
      console.log(username);
      const user = context.user._id;
      await User.findOneAndUpdate(
        { _id: user },
        { $addToSet: { photos: pic._id } },
        { new: true }
      );

      return pic;
    },
  },
};

module.exports = resolvers;
