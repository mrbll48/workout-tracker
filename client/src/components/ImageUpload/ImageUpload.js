import React, { useState } from "react";
import "../css/workout-info-card.css";

import {
  AiOutlineRise,
  AiOutlineMenu,
  AiOutlineShareAlt,
} from "react-icons/ai";

import { IconContext } from "react-icons";

function ImageUpload({ photo }) {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  // const [userUploadPicture, setUserUploadPicture] = useState(false);
  const [showIcons, setShowIcons] = useState();

  return (
    <div>
      <div className="parent">
        <div>
          <div>
            <img src={file} id="photo-container" />
          </div>
          {showIcons && (
            <div className="buttons">
              <IconContext.Provider value={{ color: "white", size: "2.1em" }}>
                <div>
                  <AiOutlineRise id="spacing" />
                  <AiOutlineMenu id="spacing" />
                  <AiOutlineShareAlt id="spacing" />
                </div>
              </IconContext.Provider>
            </div>
          )}
        </div>
        {/* Inputs */}
        <div className="group">
          <input required="" type="text" className="input" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <textarea className="input" />
          <span className="bar"></span>
          <label>Description</label>
          <div className="highlight"></div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
