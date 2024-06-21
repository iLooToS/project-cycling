import { useParams } from "react-router-dom";
import requestAxios from "../../services/axios";
import { createRef, useRef, useState } from "react";

function Reviews({ user, setreviews, numberId, setAddComment, addComment}) {
    const [comment, setComment] = useState('');
    let texyInput = useRef(null)
  
    
    const onHandleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);
      
      const { data } = await requestAxios.post('/reviews', {
        trailId: numberId,
        userId: user.id,
        comment: texyInput.current.value,
      });
console.log(data);
      
      if (data.message === 'success') {
        setreviews((prev) => [...prev, data.review]);
        setComment('');
        setAddComment(false);
      }
    };
  
    return (
      <div>
        <h1>comment</h1>
        <form onSubmit={onHandleSubmit}>
          <input
          type='text'
          ref={texyInput}
          placeholder='Комментарий'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
         <button type='submit'>создать</button>
        </form>
      </div>
    );
  }
  
  export default Reviews;