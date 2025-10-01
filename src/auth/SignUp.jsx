import React, { useState } from "react";
import { Container } from "../style/SignUpStyle";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SignUpUser } from "../api/auth";

const SignUp = ({ setUser, goToLogin, goToVerify, setShowModal }) => {
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
  ];

  const [selectedCountry, setSelectedCountry] = useState(CountryFlag[0]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    refer: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!value.firstName || !value.lastName || !value.email || !value.phoneNumber) {
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
      const { data } = await SignUpUser(payload);

      toast.success("Signup successful!");
      setUser(data.user);

      setValue({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        refer: "",
      });

      goToVerify();
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Failed to signup!"
      );
    }
   };

  const handleChange = (field) => (e) => {
    setValue((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const OnChangePhone = (e) => {
    let input = e.target.value;
    if (!/^\d*$/.test(input)) {
      toast.error("Phone number must be digits only!");
      return;
    }
    if (input.startsWith("0")) input = input.slice(1);
    setValue((prev) => ({ ...prev, phoneNumber: input }));
  };

  return (
    <Container >
      <form onSubmit={HandleSubmit} className="wrapper animate__animated  animate__bounceIn">
        <div className="signup_text">
          <h1>Sign Up</h1>
          <p>Sign up to continue</p>
        </div>

        <div className="fullname_holder">
          <div className="name_holder">
            <label>First Name</label>
            <input
              type="text"
              value={value.firstName}
              onChange={handleChange("firstName")}
            />
          </div>
          <div className="name_holder">
            <label>Last Name</label>
            <input
              type="text"
              value={value.lastName}
              onChange={handleChange("lastName")}
            />
          </div>
        </div>

        <label>Email Address</label>
        <input
          type="text"
          value={value.email}
          onChange={handleChange("email")}
          placeholder="your email here"
        />

        <label>Phone number</label>
        <div className="country">
          <div className="icon_holder">
            {selectedCountry.flag}
            <RiArrowDropDownLine
              onClick={() => setOpen(!open)}
              style={{ cursor: "pointer" }}
            />
            <hr style={{ border: "1px solid grey", height: "1.5rem" }} />
            <span>{selectedCountry.code}</span>
          </div>
          <input
            type="text"
            value={value.phoneNumber}
            onChange={OnChangePhone}
            placeholder="8166288535"
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
        <input
          type="text"
          value={value.refer}
          onChange={handleChange("refer")}
        />

        <button type="submit" className="next_btn">
          Next
        </button>

        <h3>
          Have an account? <span onClick={goToLogin}>Sign In</span>
        </h3>

        <IoClose
          className="close_btn"
          style={{ cursor: "pointer" }}
          onClick={() => setShowModal(false)}
        />
        <ToastContainer position="top-center" autoClose={3000} />
      </form>
    </Container>
  );
};

export default SignUp;
