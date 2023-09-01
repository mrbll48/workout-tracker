import React from "react";

import "../css/box-component.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_PHOTOS } from "../../utils/queries";

function StockImg({ image, workoutType, muscleInput }) {
  const { loading, data } = useQuery(GET_ALL_PHOTOS);

  const pics = data?.photos;
  console.log(pics);

  return (
    <div>
      <div className="img-container d-flex">
        <img id="img-card" src={image} alt="" />
      </div>
    </div>
  );
}

export default StockImg;
