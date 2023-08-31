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

    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.stopPropagation();
    // }

    try {
      // const response = await createUser(userFormData);
      const { data } = await addUser({
        variables: { ...userFormData },
      });

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
    <div className="pt-5">
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
