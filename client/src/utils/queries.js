import { gql } from "@apollo/client";

// query to get the logged-in user's details
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      friends {
        _id
        username
      }
      workouts {
        _id
        text
        date
        comments {
          _id
          commentText
          commentAuthor
          createdAt
        }
      }
    }
  }
`;

// query to get a specific qorkout with an id
export const GET_WORKOUT = gql`
  query workout($workoutId: String!) {
    workout(workoutId: $workoutId) {
      _id
      text
      date
      likes
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

// query to get all workouts that are related to the username
export const GET_WORKOUTS = gql`
  query workouts($username: String) {
    workouts(username: $username) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

// query to get all users (could be out? might not be needed)
export const GET_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;
