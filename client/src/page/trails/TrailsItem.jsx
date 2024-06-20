import "./TrailsItem.css";

function TrailsItem({ trail, setTrails }) {
  console.log(trail);
  return (
    <div className="route-card-wrapper" key={trail.id}>
      <img className="route-card-image" src={trail.img} />
      <div className="route-card-info">
        <h2 className="route-card-title">{trail.title}</h2>
        <p className="route-card-description">{trail.description}</p>
        <button className="route-card-button">Details</button>
      </div>
    </div>
  );
}

export default TrailsItem;
