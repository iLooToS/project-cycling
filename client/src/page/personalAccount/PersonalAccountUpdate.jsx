import React, { useState } from'react';
import requestAxios from '../../services/axios';
import { useNavigate } from 'react-router-dom';

function PersonalAccountUpdate({ user, setUser, setGetTrue}) {
    const navigate = useNavigate();
  
    
    const onHandleSubmitUpdaut = async (e) => {
      e.preventDefault();
      const { data } = await requestAxios.put('/users', {
        name,
        email,
        userId: user.id,
      });
      if (data.message === 'success') {
        const res = await requestAxios.post("/auth/logout");
        console.log(res);
        if (res.status === 200) {
            navigate("/");
          setUser(undefined);
          setAccessToken(undefined);
          setGetTrue(true);
        }
      }
    };
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    return (
    <div style={{ padding: '10px' }}>
        <form onSubmit={onHandleSubmitUpdaut}>
          <input
            type='text'
            value={name}
            placeholder='name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>Сохранить</button>
        </form>
        <button style={{ margin: '10px' }} type='submit' onClick={() => setGetTrue((prev) => !prev)}>
          Отменить
        </button>
      </div>
    );
  }


export default PersonalAccountUpdate;