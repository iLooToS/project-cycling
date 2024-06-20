import { useParams } from "react-router-dom";
import requestAxios from "../../services/axios";
import { useState } from "react";

function Reviews({ user, setreviews}) {
    const [trailId, setTrailId] = useState(1);
    const [userId, setUserId] = useState(0);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
    const {numderId} = useParams
    const onHandleSubmit = async (e) => {
      e.preventDefault();
      const { data } = await requestAxios.post('/reviews', {
        trailId,
        userId: user.id,
        rating,
        comment,
      });
      if (data.message === 'success') {
        setreviews((prev) => [...prev, data.review]);
        setTrailId(1);
        setUserId(0);
        setRating(0);
        setComment('');
      }
    };
  
    return (
      <div>
        <h1>comment</h1>
        <form onSubmit={onHandleSubmit}>
          <input
            type='text'
            name='adsas'
            value={trailId}
            placeholder='id'
            onChange={(e) => setTrailId(e.target.value)}
          />
          <input
            type='text'
            value={user.id}
            placeholder='year'
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type='text'
            value={rating}
            placeholder='rating'
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            type='text'
            value={comment}
            placeholder='comment'
            onChange={(e) => setComment(e.target.value)}
          />
          <button type='submit'>создать</button>
        </form>
      </div>
    );
  }
  
  export default Reviews;