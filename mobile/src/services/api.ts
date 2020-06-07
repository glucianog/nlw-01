import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.25.13:3333'
});

export default api;
