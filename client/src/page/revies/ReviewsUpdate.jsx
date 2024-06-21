// import React, { useRef, useState } from'react';
// import requestAxios from '../../services/axios';

// function ReviewsUpdate({ title }) {
//     const [comment, setComment] = useState('');
//     let texyInput = useRef(null)
  
    
//     const onHandleSubmit = async (e) => {
//       e.preventDefault();
//       const { data } = await requestAxios.post('/reviews', {
//         trailId: numberId,
//         userId: user.id,
//         comment: texyInput.current.value,
//       });

//       if(texyInput.current.value === '') {
//         return
//       }
//       if (data.message === 'success') {
//         setreviews((prev) => [...prev, data.review]);
//         setComment('');
//       }
//     };
  
//     return (
//       <div>
//         <h1>comment</h1>
//         <form onSubmit={onHandleSubmit}>
//           <input
//           type='text'
//           ref={texyInput}
//           placeholder='Комментарий'
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//          {comment === '' ? (null) :(<button type='submit'>создать</button>)}
//         </form>
//       </div>
//     );
// }


// export default ReviewsUpdate;