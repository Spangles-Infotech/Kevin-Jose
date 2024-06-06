import axios from "axios";
import { Baseurl } from "../../Components/request";
import { toast } from "react-toastify";

const registerRequest = async (userData) => {
  try {
    const response = await axios.post(`${Baseurl}simple_register/`, userData);

    if (response.data) {
      alert(response?.data?.message);
      return response.data;
    }
  } catch (error) {
    console.error("Error registering user:", error);
    // toast.error("Failed to register user. Please try again later.");
    throw error;
  }
};

const verifyRegisterRequest = async (userData) => {
  try {
    const response = await axios.post(`${Baseurl}register/`, userData);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error registering otp:", error);
    throw error;
  }
};

const loginRequest = async (userData) => {
  try {
    const response = await axios.post(`${Baseurl}simple_login/`, userData);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error while senting otp:", error);
    throw error;
  }
};

const verifyLoginRequest = async (userData) => {
  try {
    const response = await axios.post(`${Baseurl}login/`, userData);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error while senting otp:", error);
    throw error;
  }
};

export const authService = {
  registerRequest,
  verifyRegisterRequest,
  loginRequest,
  verifyLoginRequest
};
