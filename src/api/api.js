import axios from "axios";

export const accesToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRmN2U2ZDdlNzE4NzAwMjBlMzhmODUiLCJpYXQiOjE2MTU4MjI0NDV9.AhmuLoC63fGM7MqquxOttu4vSRjOfItMIKhpj8b2VqA";
export const apiUrl = "https://coding-challenge-api.aerolab.co";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accesToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);