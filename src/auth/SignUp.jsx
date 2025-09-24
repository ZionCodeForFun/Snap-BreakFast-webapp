import React, { useState } from "react";
import { Container } from "./SignUpStyle";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const CountryFlag = [
    {
      flag: (
        <ReactCountryFlag
          countryCode="ng"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+234",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="gh"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+233",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="dz"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+213",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="ao"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+244",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="bj"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+229",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="bw"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+267",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="bf"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+226",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="cf"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+236",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="za"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+27",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="tz"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+255",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="tg"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+228",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="tn"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+216",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="zw"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+263",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="cv"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+238",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="cm"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+237",
    },
    {
      flag: (
        <ReactCountryFlag
          countryCode="cg"
          svg
          style={{ width: "1em", height: "1em", borderRadius: "0.1rem" }}
        />
      ),
      code: "+242",
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(CountryFlag[0]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    refer: "",
  });
  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!value.firstName || !value.lastName || !value.email || !value.phone) {
      toast.error("All required fields must be filled!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    const payload = {
      ...value,
      countryCode: selectedCountry.code,
    };

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();
      console.log("Response:", data);

      toast.success("Signup successful!");

      setValue({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        refer: "",
      });
    } catch (error) {
      toast.error(error.message || "Failed to signup!");
    }
  };

  const OnChangefirstname = (e) => {
    setValue((prev) => ({ ...prev, firstName: e.target.value }));
  };
  const OnChangelastname = (e) => {
    setValue((prev) => ({ ...prev, lastName: e.target.value }));
  };
  const OnChangeEmail = (e) => {
    e.target.value;
    setValue((prev) => ({ ...prev, email: e.target.value }));
  };
  const OnChangePhone = (e) => {
    e.target.value;
    setValue((prev) => ({ ...prev, phone: e.target.value }));
  };
  const OnChangeReffer = (e) => {
    e.target.value;
    setValue((prev) => ({ ...prev, refer: e.target.value }));
  };
  console.log(value);

  return (
    <Container>
      <form onSubmit={HandleSubmit} className="wrapper">
        <div className="signup_text">
          <h2>Sign Up</h2>
          <p>Sign up to continue</p>
        </div>

        <div className="fullname_holder">
          <div className="name_holder">
            <label>First Name</label>
            <input
              type="text"
              value={value.firstName}
              onChange={OnChangefirstname}
            />
          </div>
          <div className="name_holder">
            <label>Last Name</label>
            <input
              value={value.lastName}
              onChange={OnChangelastname}
              type="text"
            />
          </div>
        </div>

        <label>Email Address</label>
        <input
          value={value.email}
          onChange={OnChangeEmail}
          type="text"
          placeholder="your email here"
        />

        <label>Phone number</label>
        <div className="country">
          <div className="icon_holder" onClick={() => setOpen(!open)}>
            {selectedCountry.flag}
            <RiArrowDropDownLine />
          </div>
          <hr />
          <input
            type="text"
            value={value.phone}
            onChange={OnChangePhone}
            placeholder={selectedCountry.code}
            style={{ paddingLeft: "0" }}
          />
        </div>

        {open && (
          <div className="dropdown">
            {CountryFlag.map((item, index) => (
              <div
                key={index}
                className="dropdown_item"
                onClick={() => {
                  setSelectedCountry(item);
                  setOpen(false);
                }}
              >
                {item.flag} {item.code}
              </div>
            ))}
          </div>
        )}

        <label>Referral code (optional)</label>
        <input value={value.refer} onChange={OnChangeReffer} type="text" />

        <button className="next_btn">Next</button>
        <h3>
          Have an account? <span>Sign In</span>
        </h3>

        <IoClose className="close_btn" />
        <ToastContainer position="top-center" autoClose={3000} />
      </form>
    </Container>
  );
};

export default SignUp;
