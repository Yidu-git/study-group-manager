import axios from "axios";

// import dotenv from "dotenv";
// dotenv.config();
const token = "";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "ngrok-skip-browser-warning": "true",
  },
});

export default api;
