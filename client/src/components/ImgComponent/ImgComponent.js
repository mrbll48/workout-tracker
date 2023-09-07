import React from "react";

import "../css/box-component.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_PHOTOS } from "../../utils/queries";

function ImgComponent({ image, workoutType, muscleInput }) {
  const { loading, data } = useQuery(GET_ALL_PHOTOS);

  const pics = data?.photos;
  console.log(pics);

  return (
    <div className="wrapper">
      {pics?.map((photo) => (
        <>
          <div className="one">
            <a href={`/profile/${photo.by}`}>
              <img id="img-photo" src={photo.url} alt="" />
            </a>
          </div>
          <div className="info">
            <h4 id="post-title">Title</h4>
            <h5 id="post-description">
              I want an M4 CSL extra text for testing jus a lil more
            </h5>
          </div>
        </>
      ))}
    </div>
  );
}

export default ImgComponent;
