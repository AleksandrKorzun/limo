"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";

const libraries = ["core", "map", "places", "marker"];

const Map = () => {
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const { isLoaded } = useJsApiLoader({
    id: "black-limo",
    googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_MAP_API_KEY,
    libraries,
  });

  const mapRef = useRef(null);

  const showRoute = async (startLocation, endLocation) => {
    if (!startLocation || !endLocation) return;

    const request = {
      origin: startLocation,
      destination: endLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);

        const route = result.routes[0];
        const { distance, duration } = route.legs[0];
        setDistance(distance.text); // e.g., "12.3 mi"
        setDuration(duration.text); // e.g., "30 mins"
      } else {
        console.error("Error fetching directions:", result);
      }
    });
  };

  useEffect(() => {
    if (isLoaded) {
      const mapOptions = {
        center: {
          lat: 41.881832,
          lng: -87.623177,
        },
        zoom: 12,
      };
      const gMap = new google.maps.Map(mapRef.current, mapOptions);

      setMap(gMap);

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(gMap);
      setDirectionsService(directionsService);
      setDirectionsRenderer(directionsRenderer);
    }
  }, [isLoaded]);

  return (
    <div className="desc:w-[50%] hidden desc:block shadow-map rounded-xl">
      {isLoaded ? (
        <div ref={mapRef} className="desc:h-[432px] rounded-t-[16px]"></div>
      ) : null}
      <div className="desc:h-[144px] flex flex-col gap-[16px] px-[16px] py-[32px] bg-white rounded-b-[16px]">
        <div className="flex justify-between">
          <p className="text-black text-medium font-latoBlack leading-[100%]">
            Total Distance:
          </p>
          <p className="text-black text-medium font-latoMedium">0 ml</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black text-medium font-latoBlack">Total Time:</p>
          <p className="text-black text-medium font-latoMedium">0 h 0 m</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
