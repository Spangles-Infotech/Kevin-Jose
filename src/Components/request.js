import axios from "axios";

// Update the Baseurl variable to match your Django backend server's URL
export const Baseurl = "http://localhost:8000/api/";
export const token =" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzcwNzQxMzUzLCJpYXQiOjE3MTA3NDEzNTMsImp0aSI6IjkzNTdkZTEzOTUwOTQ3ZDliZTlmYzM4OGJhOWYxYTFiIiwidXNlcl9pZCI6MX0.C7V9lfDpS02YFbb3oeLkGYtcflC9HKeTylHK6al1YZY"
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
