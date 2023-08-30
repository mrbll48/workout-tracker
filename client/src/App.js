import MainPage from "./components/pages/MainPage";
import LandingPage from "./components/pages/LandingPage";
import UploadWidget from "./components/UploadWidget.js/UploadWidget";
import ImageUpload from "./components/ImageUpload";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// * Cloudinary
import { Cloudinary } from "@cloudinary/url-gen";

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
      <MainPage />
    </ApolloProvider>
  );
}
export default App;

// // functions to convert photo to base64 for storing in database

// const [postImage, setPostImage] = useState({ myFile: "" });

// const handleSubmit = (e) => {
//   e.preventDefault();
// };

// const handleFileUpload = async (e) => {
//   const file = e.target.files[0];
//   console.log(file);
//   const base64 = await convertToBase64(file);
//   console.log(base64);
// };

// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }
