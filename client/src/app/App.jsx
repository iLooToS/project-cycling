import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../ui/Loader/Loader";
import { useEffect, useState } from "react";
import Navbar from "../page/navbar/Navbar";
import MainMap from "../page/mainMap/MainMap";
import Main from "../page/main/Main";
import Trails from "../page/trails/Trails";
import Registration from "../page/auth/Registration";
import Authorization from "../page/auth/Authorization";
import requestAxios, { setAccessToken } from "../services/axios";
// const testObj = [
//   {
//     id: 1,
//     title: "Route Name",
//     description: "Route Description",
//     img: "/img/Безымянный.png",
//   },
//   {
//     id: 2,
//     title: "Route Name",
//     description: "Route Description",
//     img: "/img/Безымянный.png",
//   },
//   {
//     id: 3,
//     title: "Route Name",
//     description: "Route Description",
//     img: "/img/Безымянный.png",
//   },
// ];

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [trails, setTrails] = useState([]);

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

  const axiosTrails = async () => {
    const { data } = await requestAxios.get("/trails");
    console.log(data);
    if (data.message === "success") {
      setTrails(data.trails);
    }
  };

  useEffect(() => {
    AxiosChekUser();
    axiosTrails();

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
            <Route
              path="/trails"
              element={<Trails trails={trails} setTrails={setTrails} />}
            />
            <Route
              path="/registration"
              element={<Registration setUser={setUser} />}
            />
            <Route
              path="/authorization"
              element={<Authorization setUser={setUser} />}
            />
            <Route path="/routes" element={<MainMap />} />
            <Route path="/map" element={<MainMap />} />
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
