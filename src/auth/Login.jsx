import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "../style/LoginStyle";
import { loginUser } from "../api/auth";

const Login = ({ setUser, setStep, goToSignup, setShowModal }) => {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required!");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return toast.error("Enter a valid email!");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email.trim().toLowerCase() === email.trim().toLowerCase()
    );
    if (foundUser) {
      toast.success("Instant login successful!");
      setUser(foundUser);
      setStep("verify");
      if (typeof setShowModal === "function") setShowModal(false);
      return;
    }

    try {
      const data = await loginUser({ email });
      toast.success("Login successful!");
      setUser(data.user);
      setStep("verify");
      setShowModal(false);
    } catch (error) {
      toast.error(error.message || "Login failed!");
    }
  };

  return (
    <Container>
      <form
        className="wrapper  animate__animated  animate__bounceIn"
        onSubmit={handleSubmit}
      >
        <div className="signin_text">
          <h1>Sign in</h1>
          <p>Sign in to continue</p>
        </div>

        <label>Email Address</label>
        <input
          type="text"
          value={email}
          onChange={handleChangeEmail}
          placeholder="your email here"
        />

        <button type="submit" className="next_btn">
          Sign in
        </button>

        <h3>
          Don’t have an account? <span onClick={goToSignup}>Sign Up</span>
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

export default Login;
