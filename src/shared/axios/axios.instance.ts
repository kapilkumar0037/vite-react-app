import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: '/api', // or your actual base API URL
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token'); // or a shared token service
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getAxiosInstance = () => axiosInstance;
