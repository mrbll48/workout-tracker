import React from "react";
import "../css/box-component.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_PHOTOS } from "../../utils/queries";

function ImgComponent({ image, workoutType, muscleInput }) {
  const { loading, data } = useQuery(GET_ALL_PHOTOS);
  const pics = data?.photos;

  return (
    <div>
      {pics?.map((photo) => (
        <div className="img-container d-flex">
          <img id="img-card" src={photo.url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ImgComponent;
