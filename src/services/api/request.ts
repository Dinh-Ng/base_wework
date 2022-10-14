import axios, {AxiosRequestConfig} from 'axios';

const request = axios.create({
  // baseURL: "",
  timeout: 5000,
  headers: {Accept: '*/*'},
});

request.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // Do something before API is sent
    return config;
  },
  (err: any) => {
    // Do something with request error
    return Promise.reject(err);
  },
);

request.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  async (error: any) => {
    // Do something with response error
    return Promise.reject(error);
  },
);

export default request;
