import React from "react";

import "../css/box-component.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_PHOTOS } from "../../utils/queries";
import Comment from "../Comments/Comment";

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
            <h4>{photo.title}</h4>
            <p>{photo.description}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default ImgComponent;
