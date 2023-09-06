import React from "react";

import "../css/box-component.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_PHOTOS } from "../../utils/queries";

function ImgComponent({ image, workoutType, muscleInput }) {
  const { loading, data } = useQuery(GET_ALL_PHOTOS);

  const pics = data?.photos;
  console.log(pics);

  return (
    <div id="img-component">
      {pics?.map((photo) => (
        <div className="">
          <a href={`/profile/${photo.by}`}>
            <img id="img-card" src={photo.url} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default ImgComponent;
