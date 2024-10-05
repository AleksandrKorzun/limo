import React, { forwardRef, useEffect, useRef, useState } from "react";

const AutoCompleteInput = forwardRef(
  (
    { label, type, placeholder, value, onChange, className, isLoaded, error },
    ref
  ) => {
    const [autoComplete, setAutoComplete] = useState(null);
    const [inputValue, setInputValue] = useState(value); // Initialize with the passed value
    const placeAutoCompleteRef = useRef(null);

    useEffect(() => {
      if (isLoaded) {
        const gAutoComplete = new google.maps.places.Autocomplete(
          placeAutoCompleteRef.current
        );

        // Handle the place_changed event
        gAutoComplete.addListener("place_changed", () => {
          const place = gAutoComplete.getPlace();
          if (place && place.formatted_address) {
            console.log("place", place);
            setInputValue(place.formatted_address); // Set inputValue to the selected place's name
            onChange(place.formatted_address); // Update the parent state with the selected place's name
          }
        });

        setAutoComplete(gAutoComplete);
      }
    }, [isLoaded, onChange]);

    const handleChange = (event) => {
      setInputValue(event.target.value);
      onChange(event.target.value);
    };

    return (
      <div className={`flex flex-col gap-[8px] ${className}`}>
        {label && (
          <label className="font-latoBold text-small leading-[24px] text-main">
            {label}
          </label>
        )}
        <input
          ref={placeAutoCompleteRef}
          type={type}
          placeholder={placeholder}
          value={inputValue} // Show the current inputValue
          onChange={handleChange} // Update inputValue on change
          className={`p-[8px] bg-input rounded-[8px] `}
          autoComplete="off"
        />
        {error && label && !inputValue && (
          <p className="text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

AutoCompleteInput.displayName = "AutoCompleteInput";

export default AutoCompleteInput;
