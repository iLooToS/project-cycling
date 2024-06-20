import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainMapCard from "../mainMapCard/MainMapCard";
import requestAxios from "../../services/axios";

function TrailPage({ trails, waupoint, reviews }) {
  const { numberId } = useParams();

const resultReview = reviews.filter((el) => el.trailId === +numberId)
  const trail = trails.find((el) => el.id === +numberId);
  const waupointCard = waupoint.filter((el) => el.trailId === +numberId);
//   console.log(trail);
//   console.log(waupointCard);
  console.log(resultReview[0].comment);
  return (
    <div>
      <h1>TrailPage</h1>
      <h2>{trail.title}</h2>
      <h3>{resultReview[0].comment}</h3>
      <MainMapCard waupointCard={waupointCard} />
    </div>
  );
}

export default TrailPage;
