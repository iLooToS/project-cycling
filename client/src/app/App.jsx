import "./App.css";
import { Loader } from "../ui/Loader/Loader";

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <div className="main-loader">
        <Loader />
      </div>
    </div>
  );
}

export default App;
