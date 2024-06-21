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
      setError("The passwords don't match");
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
      <h1 className="registration-page-text">Registration</h1>
      <form className="auth" onSubmit={onHandleSubmit}>
        <label htmlFor="name" className="registration-label">
          {isName && (
            <p className="validation-error">Fill in the Name field!</p>
          )}
          <input
            className="registration-input"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email" className="registration-label">
          {isEmail && (
            <p className="validation-error">Fill in the Email field!</p>
          )}
          <input
            className="registration-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="registration-label" htmlFor="password">
          {isPassword && (
            <p className="validation-error">Fill in the Password field!</p>
          )}
          <input
            className="registration-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="registration-label">
          {isCPassword && (
            <p className="validation-error">
              Complete the Check Password field!
            </p>
          )}
          <input
            className="registration-input"
            type="password"
            placeholder="check the password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </label>
        {match && (
          <p className="validation-error">The passwords don't match!</p>
        )}
        {error && <p>{error}</p>}
        <button className="register-submit-button" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Registration;
