import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "../style/LoginStyle";
import { loginUser } from "../api/auth";

const Login = ({ setUser, setStep, goToSignup }) => {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required!");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return toast.error("Enter a valid email!");

    try {
      const data = await loginUser({ email });
      toast.success("Login successful!");
      setUser(data.user);
      setStep("verify");
    } catch (error) {
      toast.error(error.message || "Login failed!");
    }
  };

  return (
    <Container>
      <form className="wrapper" onSubmit={handleSubmit}>
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

        <IoClose className="close_btn" />
        <ToastContainer position="top-center" autoClose={3000} />
      </form>
    </Container>
  );
};

export default Login;
