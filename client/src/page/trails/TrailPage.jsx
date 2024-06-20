import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainMapCard from "../mainMapCard/MainMapCard";
import requestAxios from "../../services/axios";
import './TrailPage.css'
import Reviews from "../revies/Reviews";

function TrailPage({ trails, waupoint, reviews, setreviews, user }) {
  const { numberId } = useParams();
  const navigate = useNavigate()



const resultReview = reviews.filter((el) => el.trailId === +numberId)
  const trail = trails.find((el) => el.id === +numberId);
  const waupointCard = waupoint.filter((el) => el.trailId === +numberId);
//   console.log(trail);
//   console.log(waupointCard);
let count = 0
const sumRating = resultReview.map(el => count+= el.rating)
  console.log(resultReview[0].comment);
  return (
    <div className="isTrailPage">
      <div className="button1"><button onClick={() => navigate(-1)}>назад</button></div>
      <h1>TrailPage</h1>
      <h2 style={{color: 'white'}}>Поездка, именуемая: {trail.title}</h2>
        <div className="allPort">
          <div className="isComment"><p style={{fontSize: '30px', margin: '0'}}>Обсуждай</p>
            {resultReview && 
          resultReview.map(el => <div className="elCommentMap">{el.comment}</div>)}</div>
          <div className="tty"><MainMapCard waupointCard={waupointCard} /></div>
        </div>
        <div><Reviews setreviews={setreviews} user={user}/></div>
        <div className="rating">Рейтинг: {count}</div>
    </div>
  );
}

export default TrailPage;
