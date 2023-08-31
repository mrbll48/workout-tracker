import MainPage from "./components/pages/MainPage";
// import UploadWidget from "./components/UploadWidget.js/UploadWidget";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// * Cloudinary
import { Cloudinary } from "@cloudinary/url-gen";
import NavScroll from "./components/NavScroll/NavScroll";
import UserWorkout from "./components/UserWorkout/UserWorkout";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { Workouts } from "./components/UserWorkout/Workouts";
import Profile from "./components/Profile/Profile";
import LandingPage from "./components/pages/LandingPage";

import PostCard from "./components/PostCard/PostCard";

const cld = new Cloudinary({
  cloud: {
    cloudName: "di3nk6hyq",
  },
});

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/create-workout" element={<UserWorkout />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/post" element={<PostCard />} />
          {/* <Route path="/img" element={<UploadWidget />} /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
