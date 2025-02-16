import axios from 'axios';

const API_URL = 'http://localhost:8080/api/events';

export const getEvents = () => axios.get(API_URL);
export const createEvent = (event) => axios.post(API_URL, event);
