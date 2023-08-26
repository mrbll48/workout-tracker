import React, { useState } from "react";
import "./css/landingpage.css";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

// export default function LandingPage() {

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [createFrom, setCreateForm] = useState(false);
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  const [login, { error, data }] = useMutation(LOGIN_USER);
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  // const [addUser, { error }] = useMutation(ADD_USER);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      console.log(userFormData);
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
      setShowAlert(true);
    }

    // setUserFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
  };
  return (
    <div>
      {/* <img className="fullscreen-image" src={landing} alt="nice" />
        <div className="btn-div">
          <button className="button" onClick={() => setLoginForm(true)}>
            Login
          </button>
          <button className="button" onClick={() => setCreateForm(true)}>
            Create Account
          </button>
        </div>
        <div>
          <h1 className="slogan">
            Get Fit, Share Inspire: <br></br>Uniting Workouts, One Post at a
            Time
          </h1>
        </div> */}

      <div id="form-container">
        <form className="form" onSubmit={handleFormSubmit}>
          <p>Login</p>
          <div className="group">
            <input
              required
              className="main-input"
              type="text"
              name="username"
              value={userFormData.username}
              onChange={handleInputChange}
            />
            <span className="highlight-span"></span>
            <label className="lebal-email">Username</label>
          </div>
          <div className="container-1">
            <div className="group">
              <input
                required
                className="main-input"
                type="password"
                name="password"
                value={userFormData.password}
                onChange={handleInputChange}
              />
              <span className="highlight-span"></span>
              <label className="lebal-email">Password</label>
            </div>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* <div id="form-container">
        <form className="form">
          <p>Create Account</p>
          <div className="group">
            <input required className="main-input" type="text" />
            <span className="highlight-span"></span>
            <label className="lebal-email">Username</label>
          </div>

          <div className="container-1">
            <div className="group">
              <input required className="main-input" type="password" />
              <span className="highlight-span"></span>
              <label className="lebal-email">Email</label>
            </div>
          </div>
          <div className="container-1">
            <div className="group">
              <input required className="main-input" type="password" />
              <span className="highlight-span"></span>
              <label className="lebal-email">Password</label>
            </div>
          </div>
          <button className="submit">Submit</button>
        </form>
      </div> */}
    </div>
  );
};

export default LoginForm;
