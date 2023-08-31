import React, { useState, useEffect, useRef } from "react";

import "../css/post-card.css";

import { IconContext } from "react-icons";
import NavScroll from "../NavScroll";
import {
  AiOutlineRise,
  AiOutlineMenu,
  AiOutlineShareAlt,
} from "react-icons/ai";

function PostCard() {
  const [picture, setPicture] = useState("");
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "di3nk6hyq",
        uploadPreset: "l3a5wnco",
      },
      function (error, result) {
        if (!error && result && result.info && result.info.secure_url) {
          console.log(result.info.secure_url);
          setPicture(result.info.secure_url);
        }
      }
    );
  }, []);
  return (
    <>
     <NavScroll />
    <section className="bg-dark vh-100 d-flex justify-content-around pt-5">
      <div className="parent">
        <div>
          {picture && <img src={picture} alt="Uploaded" id="photo-container" />}
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
        <div className="user">
          <button onClick={() => widgetRef.current.open()}>Upload</button>
        </div>
      </div>
    </section>
    </>
  );
}

export default PostCard;
