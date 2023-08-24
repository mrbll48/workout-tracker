import React, { useState } from "react";
import landing from "../../images/landing.jpg";
import "../css/landingpage.css";

export default function LandingPage() {
  const [loginForm, setLoginForm] = useState(false);
  const [createFrom, setCreateForm] = useState(false);

  return (
    <div>
      <img className="fullscreen-image" src={landing} alt="nice" />
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
          Get Fit, Share Inspire: <br></br>Uniting Workouts, One Post at a Time
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
      )}
      {createFrom && (
        <div id="form-container">
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
        </div>
      )}
    </div>
  );
}
