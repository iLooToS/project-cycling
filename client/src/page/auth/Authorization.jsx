import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requestAxios, { setAccessToken } from "../../services/axios";
import "./authorization.css";

function Authorization({ setUser }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const navigate = useNavigate();

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

  const onHadleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email.length === 0) {
        setIsEmail(true);
      }
      if (password.length === 0) {
        setIsPassword(true);
      }
      const { data } = await requestAxios.post("/auth/authorization", {
        email,
        password,
      });
      if (data.message === "success") {
        setUser(data.user);
        setAccessToken(data.accessToken);
        navigate("/");
      }
    } catch ({ response }) {
      console.log(response.data.message);
      setError(response.data.message);
    }
  };

  return (
    <div>
      <h1 className="authorization-page-text">Authorization</h1>
      <form className="auth" onSubmit={onHadleSubmit}>
        <label htmlFor="email" className="authorization-label">
          {isEmail && <p className="validation-error">Fill in the field Email!</p>}
          <input
          className="authorization-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="authorization-label">
          {isPassword && (
            <p className="validation-error">Fill in the field Password!</p>
          )}
          <input
          className="authorization-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <span>{error && <p>{error}</p>}</span>
        <button className="auth-submit-button" type="submit">Enter</button>
      </form>
    </div>
  );
}

export default Authorization;
