import axios from 'axios';

const instance = axios.create({
  baseURL: 'api.coincap.io/v2/',
  timeout: 3000
});

export default instance;