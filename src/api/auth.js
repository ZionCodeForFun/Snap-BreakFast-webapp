import axios from "axios";
export const SignUpUser = async (payload) => {
  const { data } = await axios.post(
    "https://tca-cohort-6-first-fullstack-projec.vercel.app/user/signup",
    payload
  );
  return data;
};



export const verifyEmailOTP = async (email, otp) => {
  try {
    const response = await axios.post(
      "https://tca-cohort-6-first-fullstack-projec.vercel.app/user/otp",
      {
        email,
        otp: String(otp),
      }
    );
    return response.data;
  } catch (error) {
    console.error("OTP verification error:", error.response?.data || error);
    throw error;
  }
};
