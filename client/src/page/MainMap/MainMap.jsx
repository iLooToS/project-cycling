import { useMemo, useState } from "react";
import "./MainMap.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function MainMap() {
  const [zoom, setZoom] = useState(9);
  const mapState = useMemo(
    () => ({ center: [59.936402, 30.304871], zoom }),
    [zoom]
  );
  return (
    <div>
      <YMaps>
        <Map
          id="map"
          className="map"
          state={mapState}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[59.936402, 30.304871]}
            properties={{
              balloonContentBody:
                "This is balloon loaded by the Yandex.Maps API module system",
            }}
          />
        </Map>
        <p>
          <button onClick={() => setZoom((zoom) => (zoom === 9 ? 12 : 9))}>
            Toggle map zoom
          </button>
        </p>
      </YMaps>
    </div>
  );
}

export default MainMap;
