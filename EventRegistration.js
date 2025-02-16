import axios from "axios";

const API_URL = "http://localhost:8080/api/registrations";

export const registerForEvent = (eventId, registration) =>
    axios.post(`${API_URL}/${eventId}`, registration);

export const getRegistrations = (eventId) =>
    axios.get(`${API_URL}/${eventId}`);
