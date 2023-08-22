import React, { useState } from "react";
import landing from "../../images/landing.jpg";

export default function LandingPage() {

  const [form, setForm ] = useState(false)

  return (
    <div>
      <img className="fullscreen-image" src={landing} alt="nice" />
      <div className="btn-div">
        <button className="button" onClick={() => setForm(true)}>
          Login
        </button>
        <button className="button">Create Account</button>
      </div>
      <div>
        <h1 className="slogan">
          Get Fit, Share Inspire: <br></br>Uniting Workouts, One Post at a Time
        </h1>
      </div>

      {/* Not working property, if want to test delete/remove the style style={{ visibility: "hidden" }} */}
      <div id="small-device-btn" style={{ display: "none" }}>
        <button className="button">Login</button>
        <button className="button">Create Account</button>
      </div>

      {/* Create account form */}
      { form && (
        <div id="form-container">
        <form className="form">
          <p>Login</p>
          <div className="group">
            <input required className="main-input" type="text" />
            <span className="highlight-span"></span>
            <label className="lebal-email">Email</label>
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
