
import axios from "axios";
import envConstants from "./envConstants";

export default axios.create({
  baseURL: envConstants.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Add other default headers if needed
  },
  withCredentials: true,
});

// TypeScript version if applicable
export type AxiosInstance = typeof axios;
