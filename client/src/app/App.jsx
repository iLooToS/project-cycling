import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../ui/Loader/Loader";
import { useEffect, useState } from "react";
import Navbar from "../page/navbar/Navbar";
import Main from "../page/main/Main";
import Trails from "../page/trails/Trails";
import Registration from "../page/auth/Registration";
import Authorization from "../page/auth/Authorization";
import requestAxios, { setAccessToken } from "../services/axios";
import TrailPage from "../page/trails/TrailPage";
import PersonalAccount from "../page/personalAccount/PersonalAccount";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [trails, setTrails] = useState([]);
  const [waupoint, setWauPoint] = useState([]);
  const [reviews, setreviews] = useState([]);

  const AxiosGetReviews = async () => {
    const { data } = await requestAxios.get(`/reviews`);
    if (data.message === "success") {
      setreviews(data.reviewer);
    }
  };

  const AxiosChekUser = async () => {
    try {
      const { data } = await requestAxios.get("/tokens/refresh");
      if (data.message === "success") {
        setUser(data.user);
        setAccessToken(data.accessToken);
      }
    } catch (error) {
      setUser(undefined);
      setAccessToken(undefined);
    }
  };

  const AxiosGetWaupoint = async () => {
    const { data } = await requestAxios.get("/waypoints");
    if (data.message === "success") {
      setWauPoint(data.waypoint);
    }
  };

  const axiosTrails = async () => {
    const { data } = await requestAxios.get("/trails");
    if (data.message === "success") {
      setTrails(data.trails);
    }
  };

  useEffect(() => {
    AxiosChekUser();
    axiosTrails();
    AxiosGetWaupoint();
    AxiosGetReviews();

    const id = setTimeout(() => {
      setLoading(true);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Navbar user={user} setUser={setUser} />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/account" element={<PersonalAccount setWauPoint={setWauPoint} setTrails={setTrails} user={user} setUser={setUser} />} />
            <Route
              path="/trails"
              element={
                <Trails
                  trails={trails}
                  setTrails={setTrails}
                  waupoint={waupoint}
                  user = {user}
                />
              }
            />
            <Route
              path="/showTrail/:numberId"
              element={
                <TrailPage
                  trails={trails}
                  waupoint={waupoint}
                  reviews={reviews}
                  setreviews={setreviews}
                  user={user}
                />
              }
            />
            <Route
              path="/registration"
              element={<Registration setUser={setUser} />}
            />
            <Route
              path="/authorization"
              element={<Authorization setUser={setUser} />}
            />
            <Route
              path="*"
              element={
                <>
                  <h1>404</h1>
                  <img
                    src="https://www.shutterstock.com/image-photo/cyclist-falls-off-bike-into-600nw-443827051.jpg"
                    alt="404"
                  />
                </>
              }
            />
          </Routes>
        </div>
      ) : (
        <div className="main-loader">
          <Loader />
        </div>
      )}
    </>
  );
}

export default App;
