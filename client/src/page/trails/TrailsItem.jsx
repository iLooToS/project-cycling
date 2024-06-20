import { Link } from "react-router-dom";
import "./TrailsItem.css";
import requestAxios from "../../services/axios";
import { useEffect, useState } from "react";
import MainMap from "../mainMap/MainMap";

function TrailsItem({ trail, setTrails, waupoint }) {
  const result = waupoint.filter((el) => el.trailId === trail.id);
  const [waypoint, setWaypoint] = useState(result);
  return (
    <div className="route-card-wrapper" key={trail.id}>
      <MainMap waypoint={waypoint} setWaypoint={setWaypoint} />
      {/* <img className="route-card-image" src='/img/Безымянный.png' /> */}
      <div className="route-card-info">
        <h2 className="route-card-title">{trail.title}</h2>
        <p className="route-card-description">{trail.description}</p>
        <button className="route-card-button">
          <Link to={`/showTrail/${trail.id}`}>About</Link>
        </button>
      </div>
    </div>
  );
}

export default TrailsItem;
