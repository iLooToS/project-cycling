import { useEffect, useRef, useState } from "react";
import "./MainMap.css";
import { YMaps, Map } from "@pbe/react-yandex-maps";

function MainMap({ waypoint, setWaypoint }) {
  const [pointA1, setPointA1] = useState(waypoint[0].latitude);
  const [pointA2, setPointA2] = useState(waypoint[0].longitude);
  const [pointB1, setPointB1] = useState(waypoint[1].latitude);
  const [pointB2, setPointB2] = useState(waypoint[1].longitude);

  const map = useRef(null);
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 12,
  };

  const addRoute = (ymaps) => {
    const pointA = [pointA1, pointA2];
    const pointB = [pointB1, pointB2];

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "bicycle",
        },
      },
      {
        boundsAutoApply: true,
        zoomMargin: 20,
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  return (
    <div>
      <YMaps query={{ apikey: "792bbe16-8675-412c-8807-6065062e8b6f" }}>
        <Map
          className="map"
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}
        >
        </Map>
      </YMaps>
    </div>
  );
}

export default MainMap;
