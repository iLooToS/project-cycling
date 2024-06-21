import { useParams } from "react-router-dom";
import requestAxios from "../../services/axios";
import { createRef, useRef, useState } from "react";
import "./Reviews.css";

function Reviews({ user, setreviews, numberId, setAddComment, addComment}) {
    const [comment, setComment] = useState('');
    let texyInput = useRef(null);
    
    const onHandleSubmit = async (e) => {
      e.preventDefault();



      const { data } = await requestAxios.post('/reviews', {
        trailId: numberId,
        userId: user.id,
        comment: texyInput.current.value,
      });
      
      if (data.message === 'success') {
        setreviews((prev) => [...prev, data.review]);
        setComment('');
        setAddComment(false);
      }
    };
  
  return (
    <div>
      <h1 className="comment-page-text">Comment</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          ref={texyInput}
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="reviews-submit-button-wrapper">
        {comment === '' ? (null) : (<button className="reviews-submit-button" type="submit">
            Submit
          </button>)}
        </div>
      </form>
    </div>
  );
}

export default Reviews;
