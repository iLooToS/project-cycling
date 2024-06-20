import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { Loader } from "../ui/Loader/Loader";
import { useEffect, useState } from "react";
import Navbar from "../page/navbar/Navbar";
import MainMap from "../page/MainMap/MainMap";
import Main from "../page/main/Main";
import Registration from "../page/auth/Registration";
import Authorization from "../page/auth/Authorization";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined)

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
          <Navbar  user={user} setUser={setUser} />
          <Routes>
          <Route path="/" element={<Main />} />
              <Route path='/registration' element={<Registration user={user}/>} />
          <Route path='/authorization' element={<Authorization user={user}/>} />
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
