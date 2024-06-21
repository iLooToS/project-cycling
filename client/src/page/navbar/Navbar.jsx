import requestAxios, { setAccessToken } from "../../services/axios";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const onHandleLogout = async () => {
    const res = await requestAxios.post("/auth/logout");
    if (res.status === 200) {
      setUser(undefined);
      setAccessToken(undefined);
      navigate("/");
    }
  };
  return (
    <nav className="Navbar">
      {user && <p className="profile-name">Hello! {user.name}</p>}
      {user && <NavLink className="navbar-link" to="/account">
        Account
      </NavLink>}
      <NavLink className="navbar-link" to="/">
        Main
      </NavLink>
      <NavLink className="navbar-link" to="/trails">
        Routes
      </NavLink>
      {user === undefined ? (
        <NavLink className="navbar-link" to="/registration">
          Registration
        </NavLink>
      ) : (
        <></>
      )}
      {user === undefined ? (
        <NavLink className="navbar-link" to="/authorization">
          Authorization
        </NavLink>
      ) : (
        <></>
      )}
      {user !== undefined ? (
        <NavLink className="navbar-link" onClick={onHandleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          Logout
        </NavLink>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
