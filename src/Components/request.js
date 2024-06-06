import axios from "axios";

// Update the Baseurl variable to match your Django backend server's URL
export const Baseurl = "http://localhost:8000/api/";
export const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc3NjUxNTAzLCJpYXQiOjE3MTc2NTE1MDMsImp0aSI6IjJkOWUyNTRkZGE5YzQyMjg5NzU0ZGE3YTUxNzViNzI4IiwidXNlcl9pZCI6NjV9.oyhvN_VUSNleXSNIm4jIn9DNjPd9dFMKaGRxva6kR0g"
axios.defaults.withCredentials = true;

export const UserConfig = {
  headers : {
      Authorization:`Bearer ${token}`,
      Accept: "application/json"
  }
}

const request = axios.create({
  baseURL: Baseurl,
});

export default request;
