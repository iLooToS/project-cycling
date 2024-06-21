import React, { useRef, useState } from "react";
import requestAxios, { setAccessToken } from "../../services/axios";
import { useNavigate } from "react-router-dom";
import './PersonalAccountUpdate.css';

function PersonalAccountUpdate({ user, setUser, setGetTrue }) {
  const navigate = useNavigate();
  let texyInput = useRef(null);
  let texyInput2 = useRef(null);
  const onHandleSubmitUpdaut = async (e) => {
    e.preventDefault();
    console.log(user.name);
    console.log(texyInput.current.value);
    console.log(user.email);
    console.log(texyInput2.current.value);
    if(String(user.name).trim() === String(texyInput.current.value).trim() && String(user.email).trim() === String(texyInput2.current.value).trim()) {
      return;
    }

    const { data } = await requestAxios.put("/users", {
      name,
      email,
      userId: user.id,
    });
    console.log(data);
    if (data.message === "success") {
      const res = await requestAxios.post("/auth/logout");
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
    <div style={{ padding: "10px" }}>
      <form onSubmit={onHandleSubmitUpdaut}>
        <input
          className="account-input"
          type="text"
          ref={texyInput}
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="account-input"
          type="text"
          ref={texyInput2}
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="personal-change-button-submit" type="submit">Apply</button>
      </form>
      <button
      className="personal-change-button-cancel"
        style={{ margin: "10px" }}
        type="submit"
        onClick={() => setGetTrue((prev) => !prev)}
      >
        Сancel
      </button>
    </div>
  );
}

export default PersonalAccountUpdate;
