import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';

function Registration({ setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      

      if (password.trim() === cpassword.trim()) {
        const { data } = await requestAxios.post('/auth/registration', {
          name,
          email,
          password,
        });
        if (data.message === 'success') {
          setUser(data.user);
          setAccessToken(data.accessToken);
          navigate('/');
        }
        return;
      }
      setError('Пароли не совпадают');
      return;
    } catch ({ message }) {
      setError(message);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form className='auth' onSubmit={onHandleSubmit}>
        <label htmlFor='name'>
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        <label htmlFor='password'>
          <input
            type='password'
            placeholder='chek password'
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </label>
        <span>{error && <p>{error}</p>}</span>
        <button type='submit'>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;