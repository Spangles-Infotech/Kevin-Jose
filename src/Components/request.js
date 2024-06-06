import axios from "axios";

// Update the Baseurl variable to match your Django backend server's URL
export const Baseurl = "http://localhost:8000/api/";
const getTokenFromLocalStorage = localStorage.getItem("customer");
axios.defaults.withCredentials = true;

export const UserConfig = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage}`,
    Accept: "application/json",
  },
};

const request = axios.create({
  baseURL: Baseurl,
});

export default request;
