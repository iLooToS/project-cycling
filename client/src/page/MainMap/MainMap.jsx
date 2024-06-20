import { useRef } from "react";
import "./MainMap.css";
import {
  YMaps,
  Map,
} from "@pbe/react-yandex-maps";

function MainMap() {
  const map = useRef(null);
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 12,
  };

  const addRoute = (ymaps) => {
    const pointA = [60.327882, 30.327952]; 
    const pointB = [60.366956, 30.320103]; 

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "bicycle",
        },
      }, 
      {
        boundsAutoApply: true,
        zoomMargin: 20
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  return (
    <div>
      <YMaps query={{ apikey: "792bbe16-8675-412c-8807-6065062e8b6f" }}>
        {/* <Map
          id="map"
          className="map"
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}
        //   defaultState={{
        //     center: [59.936402, 30.304871],
        //     zoom: 9,
        //     controls: [],
        //   }}
          modules={[
            "control.ZoomControl",
            "control.FullscreenControl",
            "multiRouter.MultiRoute",
          ]}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[59.936402, 30.304871]}
            properties={{
              balloonContentBody:
                "This is balloon loaded by the Yandex.Maps API module system",
            }}
          />
          <GeolocationControl options={{ float: "left" }} />
          <RouteButton options={{ float: "right" }} /> 
          <RouteEditor />
          <RoutePanel options={{ float: "right" }} />
        </Map> */}
        <Map
          className="map"
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}
        ></Map>
      </YMaps>
    </div>
  );
}

export default MainMap;
