import React, { useState, useEffect, useRef } from "react";

import { ADD_PHOTO } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

import "../css/post-card.css";

import { IconContext } from "react-icons";
import NavScroll from "../NavScroll";
import {
  AiOutlineRise,
  AiOutlineMenu,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { renderMatches } from "react-router-dom";

let photoUrl;

function PostCard() {
  const [picture, setPicture] = useState("");
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [photoData, setPhotoData] = useState({
    title: "",
    description: "",
    url: "",
  });

  const [addPhoto, { error, data }] = useMutation(ADD_PHOTO);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPhotoData({ ...photoData, [name]: value });
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "di3nk6hyq",
        uploadPreset: "l3a5wnco",
      },
      function (error, result, event) {
        // console.log(result);
        if (!error && result.event === "success") {
          setPicture(result.info.secure_url);
          photoUrl = result.info.secure_url;
          handleFormSubmit();
        }
      }
    );
  });

  const handleFormSubmit = async () => {
    try {
      const { data } = await addPhoto({
        variables: { ...photoData, url: photoUrl },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <NavScroll />
      <section className="bg-dark vh-100 d-flex justify-content-around pt-5">
        <div className="parent">
          <div>
            {picture && (
              <img src={picture} alt="Uploaded" id="photo-container" />
            )}
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
          <input
            type="text"
            name="title"
            placeholder="Image title"
            className="text-dark"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Image description"
            className="text-dark"
            onChange={handleInputChange}
          />
          <div className="user">
            <button onClick={() => widgetRef.current.open()}>Upload</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostCard;
