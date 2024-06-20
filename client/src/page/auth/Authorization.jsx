import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';

function Authorization({ setUser }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const onHadleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await requestAxios.post('/auth/authorization', {
      email,
      password,
    });
    if (data.message === 'success') {
      setUser(data.user);
      setAccessToken(data.accessToken);
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form className='auth' onSubmit={onHadleSubmit}>
        <label htmlFor='email'>
          <input
            type='email'
            placeholder='alex@mail.ru'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='password'>
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Войти</button>
      </form>
    </div>
  );
}

export default Authorization;