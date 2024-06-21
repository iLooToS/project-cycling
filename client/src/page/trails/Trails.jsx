import TrailsItem from "./TrailsItem";
import './Trails.css';

function Trails({ user, trails, setTrails, waupoint }) {
  return (
    <div>
      <h1 className="route-page-text">Routes Page</h1>
      <div className="routes-wrapper">
        {trails &&
          trails.map((trail) => (
            <TrailsItem key={trail.id} user={user} trail={trail} setTrails={setTrails} waupoint={waupoint} />
          ))}
      </div>
    </div>
  );
}

export default Trails;
