import React from "react";
import { useState, useEffect } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import { TfiLocationPin } from "react-icons/tfi";
import { Container } from "../style/CarouselSectionStyle";
import { Carousel } from "../api/Product";
const CarouselSection = ({ onLocationInputClick, onLiveLocation }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % Carousel.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [Carousel.length]);

  return (
    <Container>
      <article className="wrapper">
        <div className="left_holder">
          <h1>
            BreakFast That <br /> Powers Productivity...
          </h1>
          <div className="address_input">
            <div
              className="location_input"
              onClick={
                typeof onLocationInputClick === "function"
                  ? onLocationInputClick
                  : undefined
              }
            >
              <i>
                <TfiLocationPin />
              </i>
              <input type="text" placeholder="What's your address?" readOnly />
            </div>
            <div
              className="live_location_icon"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (typeof onLiveLocation === "function") {
                  if (!navigator.geolocation) {
                    alert("Geolocation is not supported by your browser.");
                    return;
                  }
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
                        onLiveLocation({ city, address: data.display_name });
                      } catch (err) {
                        alert("Could not detect location.");
                      }
                    },
                    () => {
                      alert("Unable to retrieve your location.");
                    }
                  );
                }
              }}
            >
              <i>
                <TiLocationArrowOutline />
              </i>
              <h4>Use current location.</h4>
            </div>
          </div>
          <p>
            Wholesome meals designed to build your focus, energy, and
            productivity every morning.
          </p>
        </div>
        <div className="right_holder">
          <img
            src={Carousel[currentIdx].image}
            alt={`slide ${Carousel[currentIdx].id}`}
          />
        </div>
      </article>
    </Container>
  );
};

export default CarouselSection;
