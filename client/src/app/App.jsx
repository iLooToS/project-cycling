import "./App.css";
import { Loader } from "../ui/Loader/Loader";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../page/navbar/Navbar";
import MainMap from "../page/mainMap/MainMap";
import Main from "../page/main/Main";

function App() {
  const [loading, setLoading] = useState(false);

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
          <Route path="/routes" element={<MainMap />} />
            <Route path="/map" element={<MainMap />} />
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
