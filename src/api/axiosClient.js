import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  // timeout: 10000,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (param) => queryString.stringify(param),
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = process.env.REACT_APP_API_KEY;
  return config;
});

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
