import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { createRoot } from "react-dom/client";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2VyZ2VyZXMiLCJhIjoiY2s3ZDE2OWptMGNlcDNucHE0dTJzaXRubyJ9.n8mW2tGizEW9Hwvu26iG9g";
const Marker = ({ onClick, children, feature }) => {
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
};

const MapBox = (business) => {
  const mapContainer = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  const [lng, setLng] = useState(19.1834359);
  const [lat, setLat] = useState(47.6212443);
  const [zoom, setZoom] = useState(14);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const axios = require("axios");
    const params = {
      access_key: "eb0dee09b4ed8c994e0d1de4870a8f7",
      query: `Fót, Boróka u. 3, 2151`,
    };
    axios
      .get("http://api.positionstack.com/v1/forward", { params })
      .then((response) => {
        console.log(response);
        setLat(46.249831);
        setLng(20.16996);
        //  setLat(response.data.data[0].latitude);
        // setLng(response.data.data[0].longitude);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const marker = {
      features: [
        {
          type: "Feature",
          properties: {
            title: business.business.companyName,
            description: "",
          },
          geometry: {
            coordinates: [lng, lat],
            type: "Point",
          },
        },
      ],
      type: "FeatureCollection",
    };

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/kergeres/cl6zk7bup001614o2i5xnjp7k",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: marker.features,
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [lng]);

  return (
    <>
      <div style={{ height: "200px", mapContainer }} ref={mapContainerRef} />
    </>
  );
};

export default MapBox;
