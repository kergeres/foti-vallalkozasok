import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { height } from "@mui/system";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2VyZ2VyZXMiLCJhIjoiY2s3ZDE2OWptMGNlcDNucHE0dTJzaXRubyJ9.n8mW2tGizEW9Hwvu26iG9g";

const MapBox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div
        ref={mapContainer}
        style={{ height: "400px" }}
        className="map-container"
      />
    </div>
  );
};

export default MapBox;
