import React from "react";

import "../css/post-card.css";

import { IconContext } from "react-icons";

import {
  AiOutlineRise,
  AiOutlineMenu,
  AiOutlineShareAlt,
} from "react-icons/ai";

function PostCard({ photo, alt }) {
  return (
    <div className="parent">
      <div>
        <img src={photo} alt={alt} id="photo-container" />
      </div>
      <div className="buttons">
        <IconContext.Provider value={{ color: "white", size: "2.1em" }}>
          <div>
            <AiOutlineRise id="spacing" />
            <AiOutlineMenu id="spacing" />
            <AiOutlineShareAlt id="spacing" />
          </div>
        </IconContext.Provider>
      </div>
      <div className="user"></div>
    </div>
  );
}

export default PostCard;
