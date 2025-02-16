import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './EventRegsitartionForm.css';
import UsersNavbar from "./UsersNavbar";

function RegistrationForm() {
    const { eventId } = useParams(); // Access eventId from the URL parameter
    const navigate = useNavigate(); // Hook to navigate after successful form submission
    const [event, setEvent] = useState(null); // State to hold the event details
    const [formData, setFormData] = useState({
        name: "",
        houseName: "",
        wardNumber: "",
        phoneNumber: "",
    });
    const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
    const [successMessage, setSuccessMessage] = useState(""); // For displaying success messages

    // Fetch the event details from the backend based on eventId
    useEffect(() => {
        console.log("Event ID:", eventId); // Log eventId for debugging
        if (eventId) {
            axios
                .get(`http://localhost:8080/api/events/eventget/${eventId}`)
                .then((response) => {
                    setEvent(response.data); // Set event details from response
                    console.log("Event fetched successfully:", response.data);
                })
                .catch((error) => {
                    console.error("Error fetching event:", error);
                });
        } else {
            console.error("Event ID is missing.");
            setErrorMessage("Event ID is missing.");
        }
    }, [eventId]);

    // Handle form input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!eventId) {
            setErrorMessage("Event ID is missing.");
            return;
        }

        const token = localStorage.getItem("token"); // Get token from localStorage

        try {
            const response = await axios.post(
                `http://localhost:8080/api/registrations/eventpost/${eventId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Add the token to the request headers
                    },
                }
            );

            // Example: Use response data
            console.log("Registration response:", response.data);
            setSuccessMessage(
                `Registration successful! Your registration ID: ${response.data.id}`
            );
            setErrorMessage(""); // Clear any error messages
            navigate("/EventList"); // Navigate to the UserEvents page after successful registration
        } catch (error) {
            if (error.response) {
                setErrorMessage(
                    `Registration failed: ${error.response.data.message || error.response.statusText}`
                );
            } else {
                setErrorMessage("An error occurred during registration.");
            }
            console.error("Error during registration:", error);
        }
    };

    return (
        <div >
            <UsersNavbar/>
            <div classname="registration-event-page">
                
        <div className="registration-form-container">
            <h1>Register for Event</h1>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

            {event ? (
                <div>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                </div>
            ) : (
                <p>Enter Your details...</p>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="houseName">House Name</label>
                    <input
                        type="text"
                        id="houseName"
                        name="houseName"
                        value={formData.houseName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="wardNumber">Ward Number</label>
                    <input
                        type="text"
                        id="wardNumber"
                        name="wardNumber"
                        value={formData.wardNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
        </div>
        </div>
    );
}

export default RegistrationForm;
