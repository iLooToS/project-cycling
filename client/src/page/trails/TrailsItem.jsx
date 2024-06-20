import { Link } from "react-router-dom";
import "./TrailsItem.css";
import requestAxios from "../../services/axios";
import { useEffect, useState } from "react";
import MainMap from "../mainMap/MainMap";

function TrailsItem({ trail, setTrails }) {
  const [waypoint, setWaypoint] = useState([]);

  const axiosTrailsCard = async () => {
    const { data } = await requestAxios.get(`/waypoints/${trail.id}`);
    setWaypoint(data.trails);
  };

  useEffect(() => {
    axiosTrailsCard();
  }, []);

  return (
    <div className="route-card-wrapper" key={trail.id}>
      <MainMap waypoint={waypoint} setWaypoint={setWaypoint} />
      {/* <img className="route-card-image" src='/img/Безымянный.png' /> */}
      <div className="route-card-info">
        <h2 className="route-card-title">{trail.title}</h2>
        <p className="route-card-description">{trail.description}</p>
        <button className="route-card-button">
          <Link to={`/trails/${trail.id}`}>About</Link>
        </button>
      </div>
    </div>
  );
}

export default TrailsItem;
