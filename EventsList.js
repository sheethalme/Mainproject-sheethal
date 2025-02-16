import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEvents } from "./EventService";
import './EventList.css';
import UsersNavbar from "./UsersNavbar";

function EventList() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state
    const [error, setError] = useState(null);  // Add error state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                setEvents(response.data);
                setLoading(false);  // Set loading to false once events are fetched
            } catch (error) {
                setError("Failed to fetch events. Please try again later.");
                setLoading(false);  // Set loading to false if there is an error
            }
        };

        fetchEvents();
    }, []);

    const handleRegisterClick = (eventId) => {
        navigate(`/RegistrationForm/${eventId}`);
    };

    // Pass the event count to UsersNavbar
    const eventCount = events.length;

    return (
        <div>
            <UsersNavbar eventCount={eventCount} />
            <div className="admin-event-page">
                <div className="event-list-container">
                    <h1>Available Events</h1>
                    {loading && <p>Loading events...</p>}  {/* Show loading text while fetching */}
                    {error && <p className="error-message">{error}</p>}  {/* Show error message if there's an issue */}
                    <ul>
                        {events.map((event) => (
                            <li key={event.id}>
                                <h2>{event.title}</h2>
                                <p>{event.description}</p>
                                <p>{event.date}</p>
                                <p>{event.location}</p>
                                <button onClick={() => handleRegisterClick(event.id)}>Register</button>
                            </li>
                        ))}
                    </ul>
                    <p className="event-note">"Nature does not hurry, yet everything is accomplished."</p>
                </div>
            </div>
        </div>
    );
}

export default EventList;
