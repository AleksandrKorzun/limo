"use client";

import Container from "@/components/container";

import Stepper from "@/components/stepper";
import Title from "@/components/ui/title";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import PlaceForm from "@/components/forms/placeForm";
import VehicleForm from "@/components/forms/vehicleForm";
import ContactForm from "@/components/forms/contactForm";
import Final from "@/components/forms/final";
import ReviewForm from "@/components/forms/rewievForm";

const libraries = ["core", "map", "places", "marker"];

const SectionForm = () => {
  const [step, setStep] = useState(1);
  const [map, setMap] = useState(null);
  const [isMapVisible, setIsMapVisible] = useState(true);

  const [startDate, setStartDate] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const [form, setForm] = useState({
    pick_up_location: "",
    drop_off_location: "",
    type_transfer: "Point to Point",
    date: "",
    time: "",
    way_points: [],
    passengers: 1,
    suitcase: 1,
    child_seat: 1,
    car: "",
    type: "Premium Sedan",
    first_name: "",
    second_name: "",
    email_address: "",
    phone_number: "",
    comments: "",
    contact_by_phone: false,
    contact_by_email: false,
  });

  const { isLoaded } = useJsApiLoader({
    id: "black-limo",
    googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_MAP_API_KEY,
    libraries,
  });

  const mapRef = useRef(null);

  const showRoute = async (startLocation, endLocation, waypoints = []) => {
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

  useEffect(() => {
    if ((step === 1 || step === 4) && isLoaded) {
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

      if (!form.pick_up_location || !form.drop_off_location) return;

      const request = {
        origin: form.pick_up_location,
        destination: form.drop_off_location,
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: form.way_points.map((point) => ({
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
    }
  }, [step, isLoaded]);

  const onSubmitForm = (v) => {
    setStep((prev) => (prev !== 3 ? prev + 1 : prev));
  };

  const scrollToAnchor = () => {
    const element = document.getElementById("book-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (step !== 1) {
      setIsMapVisible(true);
      scrollToAnchor();
    }
  }, [step]);
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
            form={form}
            onSubmitForm={onSubmitForm}
            setForm={setForm}
          />
        );
        break;
      case 2:
        return (
          <VehicleForm
            step={step}
            setStep={setStep}
            form={form}
            setForm={setForm}
          />
        );
        break;
      case 3:
        return (
          <ContactForm
            step={step}
            setStep={setStep}
            form={form}
            setForm={setForm}
          />
        );
        break;
      case 4:
        return (
          <ReviewForm
            step={step}
            setStep={setStep}
            form={form}
            mapRef={mapRef}
            isLoaded={isLoaded}
            setForm={setForm}
            duration={duration}
            distance={distance}
          />
        );
        break;
      case 5:
        return <Final setStep={setStep} form={form} setForm={setForm} />;
        break;

      default:
        break;
    }
  };
  return (
    <section>
      <Container>
        <a id="book-form" className="invisible"></a>
        <Title text="Booking Form" />
        <div className="bg-backgroundSecondary px-[16px] py-[48px] desc:px-[112px] desc:py-[56px] mobV:px-[16px] mobV:py-[48px] rounded-[16px]">
          {step !== 4 && <Stepper step={step} />}
          {getForm()}
        </div>
      </Container>
    </section>
  );
};

export default SectionForm;
