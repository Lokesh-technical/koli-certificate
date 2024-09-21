import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.48:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor if needed
axiosInstance.interceptors.request.use(
  (config) => config, // Perform actions before the request is sent

  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response, // Perform actions on response data
  (error) => Promise.reject(error)
);

export default axiosInstance;
