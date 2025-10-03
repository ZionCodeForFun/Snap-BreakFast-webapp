import React, { useState } from "react";
import {
  ServiceContainer,
  ServiceContent,
  Buttonholder,
  ServicetextContent,
  Servicetext,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "../../style/AddressStyle";

import { IoCloseOutline } from "react-icons/io5";

const Address = ({ onClose, onAddressSubmit, onDetectLocation,ToastContainer,toast }) => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const city =
            data.address &&
            (data.address.city ||
              data.address.state ||
              data.address.county ||
              "");
          if (typeof onDetectLocation === "function") {
            onDetectLocation({ city, address: data.display_name });
          }
        } catch (err) {
          toast.error("Could not detect location.");
        }
        setLoading(false);
      },
      () => {
        toast("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  };

  return (
    <ServiceContainer>
      <ServiceContent className="animate__animated  animate__bounceIn">
        <Buttonholder>
          <button className="closebtn" onClick={onClose}>
            <IoCloseOutline />
          </button>
        </Buttonholder>

        <ServicetextContent>
          <Servicetext>
            <p className="delivertext">Where Shall We deliver to?</p>
            <SearchContainer>
              <SearchIcon />
              <SearchInput
                type="text"
                placeholder="Search address in Lagos"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </SearchContainer>
          </Servicetext>
          <button
            className="locationbtn"
            onClick={() => {
              if (typeof onAddressSubmit === "function")
                onAddressSubmit(address);
            }}
            disabled={loading}
          >
            Use this address
          </button>
        </ServicetextContent>
      </ServiceContent>
      <ToastContainer autoClose={2000} position="top-center"/>    
      </ServiceContainer>
  );
};

export default Address;

