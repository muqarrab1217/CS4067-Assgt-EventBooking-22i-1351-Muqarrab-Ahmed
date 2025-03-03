import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" }
});
