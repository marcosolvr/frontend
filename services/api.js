import axios from 'axios';

const api = axios.create({
  baseURL: 'https://biblibapi.herokuapp.com'
});

export default api;