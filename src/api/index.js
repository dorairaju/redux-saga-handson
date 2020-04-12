import axios from 'axios';

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';
// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';
export default axios.create({
  baseURL: 'http://rem-rest-api.herokuapp.com/api',
  withCredentials: true
});
