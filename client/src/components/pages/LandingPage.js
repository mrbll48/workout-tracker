import { useState } from "react";
import "../css/landingpage.css";

import Auth from "../../utils/auth";

import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "../SignupForm";
import LoginForm from "../LoginForm";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

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
    <div className="bg-img">
      <div className="btn-div">
        {Auth.loggedIn() ? (
          <>
            <Link to="/main">
              <button className="button">Home</button>
            </Link>
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
      </div>

      {showLogin ? (
        <LoginForm />
      ) : showCreate ? (
        <SignupForm />
      ) : (
        <h1 className="slogan">
          Get Fit, Share Inspire: <br></br>Uniting Workouts, One Post at a Time
        </h1>
      )}
    </div>
  );
}
