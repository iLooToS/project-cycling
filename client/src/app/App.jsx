import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { Loader } from "../ui/Loader/Loader";
import MainMap from "../page/MainMap/MainMap";


function App() {

  
  return (
    <div>
      <h1>Hello!</h1>
      <MainMap />
      <div className="main-loader">
        <Loader />

        <Routes>
          <Route path='/registration' user={user} />
          <Route path='/authorization' user={user} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
