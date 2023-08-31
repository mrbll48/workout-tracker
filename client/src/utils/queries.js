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
      photos {
        title
        description
        url
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($username: String) {
    user(username: $username) {
      _id
      username
      friends {
        _id
        username
      }
      workouts {
        _id
        exercise
        reps
        sets
      }
      photos {
        title
        description
        url
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query getUsers {
    users {
      _id
      username
      friends {
        _id
        username
      }
      workouts {
        _id
        exercise
        reps
        sets
      }
      photos {
        title
        description
        url
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
  query workouts($userId: String) {
    workouts(userId: $userId) {
      _id
      exercise
      sets
      reps
      postedBy
    }
  }
`;
