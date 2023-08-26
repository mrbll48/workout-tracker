import { useState } from "react";
import "../css/landingpage.css";

import Auth from "../../utils/auth";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "../SignupForm";
import LoginForm from "../LoginForm";

export default function LandingPage() {
  // function to import logout from auth and assign it to logout variable
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowCreate(false);
  };
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => {
    setShowCreate(true);
    setShowLogin(false);
  };
  return (
    <div className="bg-img ">
      {/* <img className="" src={landing} alt="nice" /> */}
      <div className="btn-div">
        {/* added in logic for displaying logout button */}
        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="button" onClick={handleShowLogin}>
              Login
            </button>
            <button className="button" onClick={handleShowCreate}>
              Create Account
            </button>
          </>
        )}

        {/* <button className="button" onClick={handleShowLogin}>
          Login
        </button>
        <button className="button" onClick={handleShowCreate}>
          Create Account
        </button> */}
      </div>
      {showLogin ? (
        <LoginForm />
      ) : (
        <h1 className="slogan">
          Get Fit, Share Inspire: <br></br>Uniting Workouts, One Post at a Time
        </h1>
      )}
      {showCreate ? <SignupForm /> : null}
    </div>
  );
}
