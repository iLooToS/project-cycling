import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ user, setUser }) {


    const onHandleLOgout = async () => {
      const { data } = await requestAxios.get('/auth/logout');
      console.log(data);
      if (data.message === 'success') {
        setAccessToken(undefined);
        setUser(undefined);
      }
    }
  return (
    <nav className="Navbar">
      <NavLink className="navbar-link" to="/">Main</NavLink>
      <NavLink className="navbar-link" to="/routes">Routes</NavLink>
      <NavLink className="navbar-link" to="/map">Map</NavLink>

      {user ? (<button type='button' onClick={onHandleLOgout}>
          logout
        </button>) : (
          <>
        <NavLink className="navbar-link" to="/authorization">Authorization</NavLink>
        <NavLink className="navbar-link" to="/registration">Registration</NavLink>
      </>
      )}
    </nav>
  );
}

export default Navbar
