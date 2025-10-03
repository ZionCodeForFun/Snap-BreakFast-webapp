import React, { useState, useRef } from "react";
import { Container } from "../style/VerifyPhoneSyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from "react-icons/io5";
import { verifyEmailOTP } from "../api/auth";

const VerifyEmail = ({ user, onVerified, setShowModal }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user.email) {
      toast.error("User email is missing!");
      return;
    }
    if (otp.some((d) => d === "")) {
      return toast.error("Please enter all 4 digits");
    }

    try {
      const code = otp.join("");
      const data = await verifyEmailOTP(user.email, code);
      toast.success("Email verified successfully!");
      if (onVerified) onVerified(data?.user || user);
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed!");
    }
    console.log("Submitting:", { email: user?.email, otp: code });
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="wrapper animate__animated  animate__bounceIn"
      >
        <h2>Verify Email Address</h2>
        <p>
          {" "}
          A verification has been sent to your email Address, Please enter to
          continue {user?.email}
        </p>
        <div className="otp_inputs">
          {otp.map((digit, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => (inputsRef.current[i] = el)}
            />
          ))}
        </div>
        <button className="verify_btn" type="submit">
          Verify
        </button>
        <p className="goBack">
          Didn't receive the code? Resend code in <span> 1:59</span>
        </p>
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

export default VerifyEmail;
