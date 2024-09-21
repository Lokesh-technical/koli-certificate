import { useSelector } from 'react-redux';

import axiosInstance from './interceptor';

const AxiosInterceptors = () => {
  const authToken = useSelector((state) => state?.auth?.user?.token);
  console.log("authTokenauthTokenauthToken", authToken);
  

  axiosInstance.interceptors.request.use(
    (config) => {
      if (authToken && config.requiresToken !== false) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );
};

export default AxiosInterceptors;
