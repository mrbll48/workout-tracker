import React, { useState } from "react";
import "./css/landingpage.css";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
      setShowAlert(true);
    }
  };
  return (
    <div className=" pt-5 ">
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
    </div>
  );
};

export default LoginForm;
