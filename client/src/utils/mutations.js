import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const POST_WORKOUT = gql`
  mutation postWorkout($exercise: String!, $sets: String!, $reps: String!) {
    postWorkout(exercise: $exercise, sets: $sets, reps: $reps) {
      _id
      exercise
      sets
      reps
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password) {
      token
      _id
      username
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      _id
    }
  }
`;

export const UPDATE_WORKOUT = gql`
  mutation updateWorkout($workoutId: ID!, $text: String!, $date: String!) {
    updateWorkout(
      workoutId: $workoutId
      workoutDetails: { text: $text, date: $date }
    ) {
      _id
      text
      date
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation deleteWorkout($workoutId: ID!) {
    deleteWorkout(workoutId: $workoutId) {
      _id
    }
  }
`;

export const ADD_PHOTO = gql`
  mutation addPhoto(
    $title: String
    $description: String
    $url: String
    $by: String
  ) {
    addPhoto(title: $title, description: $description, url: $url, by: $by) {
      _id
      title
      description
      url
      by
    }
  }
`;
