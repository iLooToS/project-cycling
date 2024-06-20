import TrailsItem from "./TrailsItem";

function Trails({ trails, setTrails }) {
  return (
    <div>
      <h1>Routes Page</h1>
      <div className="routes-wrapper">
        {trails &&
          trails.map((trail) => (
            <TrailsItem key={trail.id} trail={trail} setTrails={setTrails} />
          ))}
      </div>
    </div>
  );
}

export default Trails;
