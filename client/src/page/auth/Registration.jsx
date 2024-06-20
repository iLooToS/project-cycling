import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requestAxios, { setAccessToken } from "../../services/axios";
import "./registration.css";

function Registration({ setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [cpassword, setCPassword] = useState("");
  const [isCPassword, setIsCPassword] = useState(false);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (name.length > 0) {
      setIsName(false);
    }
  }, [name]);

  useEffect(() => {
    if (email.length > 0) {
      setIsEmail(false);
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0) {
      setIsPassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (cpassword.length > 0) {
      setIsCPassword(false);
    }
  }, [cpassword]);

  useEffect(() => {
    if (password === cpassword) {
      setMatch(false);
    }
  }, [cpassword]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.length === 0) {
        setIsName(true);
      }
      if (email.length === 0) {
        setIsEmail(true);
      }
      if (password.length === 0) {
        setIsPassword(true);
      }
      if (cpassword.length === 0) {
        setIsCPassword(true);
      }
      if (password.trim() !== cpassword.trim()) {
        setMatch(true);
      }
      if (password.trim() === cpassword.trim()) {
        const { data } = await requestAxios.post("/auth/registration", {
          name,
          email,
          password,
        });
        if (data.message === "success") {
          setUser(data.user);
          setAccessToken(data.accessToken);
          navigate("/");
        }
        return;
      }
      setError("Пароли не совпадают");
      return;
    } catch ({ response }) {
      setError(response.data.message);
      setInterval(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form className="auth" onSubmit={onHandleSubmit}>
        <label htmlFor="name">
        {isName && <p className="validation-error">Заполните поле Name!</p>}
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
        {isEmail && <p className="validation-error">Заполните поле Email!</p>}
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
        {isPassword && (
            <p className="validation-error">Заполните поле Password!</p>
          )}
          <input
            type="password"
            placeholder="пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="password">
        {isCPassword && (
            <p className="validation-error">Заполните поле Check Password!</p>
          )}
          <input
            type="password"
            placeholder="повторите пароль"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </label>
        {match && <p className="validation-error">Пароли не совпадают!</p>}
        <span>{error && <p>{error}</p>}</span>
        <button className="register-submit-button" type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
