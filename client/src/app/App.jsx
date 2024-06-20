import "./App.css";
import { Loader } from "../ui/Loader/Loader";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../page/navbar/Navbar";
import MainMap from "../page/mainMap/MainMap";
import Trails from "../page/trails/Trails";
import Main from "../page/main/Main";
const testObj = [
  {
    id: 1,
    title: 'Route Name',
    description: 'Route Description',
    img: '/img/Безымянный.png'
  },
  {
    id: 2,
    title: 'Route Name',
    description: 'Route Description',
    img: '/img/Безымянный.png'
  },
  {
    id: 3,
    title: 'Route Name',
    description: 'Route Description',
    img: '/img/Безымянный.png'
  },
];

function App() {
  const [loading, setLoading] = useState(false);
  const [trails, setTrails] = useState(testObj);

  useEffect(() => {
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
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/trails" element={<Trails trails={trails} setTrails={setTrails} />} />
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
