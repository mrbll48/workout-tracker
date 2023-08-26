import React, { useState } from "react";
import "./css/landingpage.css";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

// export default function LandingPage() {

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  // set state for form validation
  // const [validated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log({ ...userFormData });
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.stopPropagation();
    // }

    try {
      console.log(userFormData);
      // const response = await createUser(userFormData);
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
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
        </div>
        {loginForm && (
          <div id="form-container">
            <form className="form">
              <p>Login</p>
              <div className="group">
                <input required className="main-input" type="text" />
                <span className="highlight-span"></span>
                <label className="lebal-email">Username</label>
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
          </div>
        )} */}

      <div id="form-container">
        <form className="form" onSubmit={handleFormSubmit}>
          <p>Create Account</p>
          <div className="group">
            <input
              required
              className="main-input"
              name="username"
              type="text"
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
                name="email"
                type="email"
                onChange={handleInputChange}
                value={userFormData.email}
              />
              <span className="highlight-span"></span>
              <label className="lebal-email">Email</label>
            </div>
          </div>
          <div className="container-1">
            <div className="group">
              <input
                required
                className="main-input"
                name="password"
                type="password"
                onChange={handleInputChange}
                value={userFormData.password}
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
    </div>
  );
};

export default SignupForm;
