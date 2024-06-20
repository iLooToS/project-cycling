import "./App.css";
import { Loader } from "../ui/Loader/Loader";
import MainMap from "../page/MainMap/MainMap";

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <MainMap />
      <div className="main-loader">
        <Loader />
      </div>
    </div>
  );
}

export default App;
