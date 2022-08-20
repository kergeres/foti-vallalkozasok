import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { createRoot } from "react-dom/client";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2VyZ2VyZXMiLCJhIjoiY2s3ZDE2OWptMGNlcDNucHE0dTJzaXRubyJ9.n8mW2tGizEW9Hwvu26iG9g";
const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };
  const markerstyle = {
    backgroundcolor: "red",
    border: "1px solid blue",
    color: "white",
    padding: "20px",
    textalign: "center",
    textdecoration: "none",
    display: "inline-block",
    fontsize: "16px",
    margin: "4px 2px",
    borderradius: "50%",
  };

  return (
    <button onClick={_onClick} style={markerstyle}>
      {children}
    </button>
  );
};

const MapBox = () => {
  const [marker, setMarker] = useState({
    features: [
      {
        type: "Feature",
        properties: {
          title: "Lincoln Park",
          description: "A northside park that is home to the Lincoln Park Zoo",
        },
        geometry: {
          coordinates: [19.180053, 47.622193],
          type: "Point",
        },
      },
    ],
    type: "FeatureCollection",
  });
  const mapContainer = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  const map = useRef(null);
  const [lng, setLng] = useState(19.1834359);
  const [lat, setLat] = useState(47.6212443);
  const [zoom, setZoom] = useState(14);
  const mapContainerRef = useRef(null);
  const setter = () => {
    setMarker((prev) => ({
      ...prev,
      ...{
        features: { geometry: { coordinates: [18.180059, 47.622199] } },
      },
    }));
  };

  // useEffect(() => {

  //   });
  // },[marker]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/kergeres/cl6zk7bup001614o2i5xnjp7k",
      center: [lng, lat],
      zoom: zoom,
    });

    // Render custom marker components
    marker.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement("div");
      // Render a Marker Component on our new DOM node

      createRoot(ref.current).render(
        <Marker onClick={markerClicked} feature={feature} />
      );

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });
    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [marker]);
  const markerClicked = (title) => {
    window.alert(title);
  };

  return (
    <>
      <button onClick={setter}>klik</button>
      <div style={{ height: "400px", mapContainer }} ref={mapContainerRef} />
    </>
  );
};

export default MapBox;
