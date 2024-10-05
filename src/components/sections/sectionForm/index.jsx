"use client";
import ArrowLeftIcon from "@/assets/icons/ArrowLeft";
import ArrowRightIcon from "@/assets/icons/ArrowRight";
import CalendarIcon from "@/assets/icons/Calendar";
import AutoCompleteInput from "@/components/ui/autoCompleteInput";
import Container from "@/components/container";
import CustomButton from "@/components/ui/customButton";
import Input from "@/components/ui/fieldInput";
import Select from "@/components/ui/select";
import Stepper from "@/components/stepper";
import Title from "@/components/ui/title";
import { BOOKING_FORM, BOOKING_STEPS } from "@/data/constant";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PlaceForm from "@/components/forms/placeForm";
import VehicleForm from "@/components/forms/vehicleForm";
import ContactForm from "@/components/forms/contactForm";
import Final from "@/components/forms/final";

const libraries = ["core", "map", "places", "marker"];

const SectionForm = () => {
  const [step, setStep] = useState(1);
  const [map, setMap] = useState(null);
  const [startDate, setStartDate] = useState(null);
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

  const showRoute = async (startLocation, endLocation, waypoints = []) => {
    console.log("startLocation", startLocation);
    console.log("endLocation", endLocation);
    console.log("waypoints", waypoints);
    if (!startLocation || !endLocation) return;

    const request = {
      origin: startLocation,
      destination: endLocation,
      travelMode: google.maps.TravelMode.DRIVING,
      waypoints: waypoints.map((point) => ({
        location: point,
        stopover: true,
      })),
      optimizeWaypoints: true,
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
  const onSubmitForm = (v) => {
    setStep((prev) => (prev !== 3 ? prev + 1 : prev));
    console.log("v", v);
  };

  const getForm = () => {
    switch (step) {
      case 1:
        return (
          <PlaceForm
            step={step}
            mapRef={mapRef}
            setStep={setStep}
            isLoaded={isLoaded}
            showRoute={showRoute}
            distance={distance}
            duration={duration}
            onSubmitForm={onSubmitForm}
          />
        );
        break;
      case 2:
        return <VehicleForm step={step} setStep={setStep} />;
        break;
      case 3:
        return <ContactForm step={step} setStep={setStep} />;
        break;
      case 4:
        return <Final setStep={setStep} />;
        break;

      default:
        break;
    }
  };
  return (
    <section>
      <Container className>
        <Title text="Booking Form" />
        <div className="bg-backgroundSecondary desc:px-[112px] desc:py-[56px]">
          {step !== 4 && <Stepper step={step} />}
          {getForm()}
        </div>
      </Container>
    </section>
  );
};

export default SectionForm;
