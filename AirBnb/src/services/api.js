import axios from 'axios';

const api = axios.create({
  baseURL: 'https://js-airbnb.herokuapp.com',
});

export default api;
