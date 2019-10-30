import axios from 'axios';
import { toast } from 'react-toastify';
import { log } from './logService';

const http = axios.create({
  baseURL: 'http://localhost:3000'
});

http.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    log(expectedError);
    toast.error('An unexpected error occurrred.');
  }

  return Promise.reject(error);
});

export default http;
