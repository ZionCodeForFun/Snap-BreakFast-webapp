import axios from "axios";
export const SignUpUser = async (payload) => {
  const { data } = await axios.post(
    "http://localhost:5000/api/signup",
    payload
  );
  return data;
};


const API_BASE = "http://localhost:5000/api"; 

export const loginUser = async ({ email }) => {
  try {
    const response = await axios.post(`${API_BASE}/login`, { email });
    return response.data; 
  } catch (error) {
  
    throw new Error(error.response?.data?.message || "Login failed");
  }
};


export const verifyEmailOTP = async (email, otp) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/verify-email",
      {
        email,
        otp,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
