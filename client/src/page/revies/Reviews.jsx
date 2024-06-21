import { useParams } from "react-router-dom";
import requestAxios from "../../services/axios";
import { createRef, useRef, useState } from "react";
import "./Reviews.css";

function Reviews({ user, setreviews, numberId, setAddComment, addComment}) {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0)
    // const [trailId, setTrailId] = useState('')
    let texyInput = useRef(null)
    
    const onHandleSubmit = async (e) => {
      e.preventDefault();
      
      const { data } = await requestAxios.post('/reviews', {
        trailId: +numberId,
        userId: user.id,
        rating,
        comment: texyInput.current.value,
      });
      console.log(data);
      if (data.message === 'success') {
        setreviews((prev) => [...prev, data.review]);
        setComment('');
        setRating(0)
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
        <label htmlFor="pet-select">Choose a pet:</label>
        <select
        id="rating-select"
            value={rating}
                onChange={(e) => setRating(e.target.value)}
                >
                <option value="">--rating--</option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5'}>5</option>
                </select>
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
