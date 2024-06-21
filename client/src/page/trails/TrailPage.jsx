import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainMapCard from "../mainMapCard/MainMapCard";
import requestAxios from "../../services/axios";
import "./TrailPage.css";
import Reviews from "../revies/Reviews";

function TrailPage({ trails, waupoint, reviews, setreviews, user }) {
  const { numberId } = useParams();
  const navigate = useNavigate();

  const [addComment, setAddComment] = useState(true);
  let isCommented;
if (user) {
    isCommented = reviews.find((el) => el.userId === user.id);
}


  useEffect(() => {
    if (isCommented) {
      setAddComment(false);
    }
  }, []);

  const onHandleDelite = async () => {
    const { data } = await requestAxios.delete(`/reviews/${reviews.commentId}`);

    if (data.message === "success") {
      setreviews((prev) =>
        prev.filter((delReview) => delReview.userId !== user.id)
      );
      setAddComment(true);
    }
  };

  const resultReview = reviews.filter((el) => el.trailId === +numberId);
  const trail = trails.find((el) => el.id === +numberId);
  const waupointCard = waupoint.filter((el) => el.trailId === +numberId);
  let count = 0;
  const sumRating = resultReview.map((el) => (count += el.rating));
  return (
    <div className="isTrailPage">
      <div className="button1">
        <button onClick={() => navigate(-1)}>Backward</button>
      </div>
      <h1 className="trail-page-text">TrailPage</h1>
      <h2 style={{ color: "white" }}>Route name: {trail.title}</h2>
      <div className="allPort">
        <div className="isComment">
          <p className="commentHeader">Discuss</p>
          {resultReview &&
            resultReview.map((el, index) => (
              <div className="elCommentMap" key={index}>
                <p className="commentText">{el.comment}</p>
                {user && user.id === el.userId && (
                  <button type="button" onClick={onHandleDelite}>
                    Delete
                  </button>
                )}
              </div>
            ))}
        </div>
        <div className="tty">
          <MainMapCard waupointCard={waupointCard} />
        </div>
      </div>
      <div>
        {user && addComment && (
          <Reviews
            setreviews={setreviews}
            user={user}
            numberId={numberId}
            addComment={addComment}
            setAddComment={setAddComment}
          />
        )}
      </div>
      <div className="rating">Rating: {count}</div>
    </div>
  );
}

export default TrailPage;
