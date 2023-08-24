import { useState } from "react";
import "../css/landingpage.css";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupForm from "../SignupForm";
import LoginForm from "../LoginForm";

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => {
    setShowLogin(true)
    setShowCreate(false)
  }
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => {
    setShowCreate(true)
    setShowLogin(false)
  }
  return (
    <div className="bg-img ">
      {/* <img className="" src={landing} alt="nice" /> */}
      <div className="btn-div">
        <button className="button" onClick={handleShowLogin}>
          Login
          </button>
        <button className="button" onClick={handleShowCreate}>
          Create Account
        </button>
      </div>
      {showLogin ? (
        <LoginForm />
      ) : (
        <h1 className="slogan">
          Get Fit, Share Inspire: <br></br>Uniting Workouts, One Post at a Time
        </h1>
      )}
      {showCreate ? (
        <SignupForm />
      ) : (
       null
      )}
    </div>
  );
}


