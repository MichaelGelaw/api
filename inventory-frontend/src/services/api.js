import axios from "axios";

const API = axios.create({
  baseURL: "https://inventory-api-laravel.up.railway.app/api/", // Laravel API URL   - Local http://localhost:8000/api
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
