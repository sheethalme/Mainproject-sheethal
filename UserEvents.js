import React, { useEffect, useState } from "react";
import { getEvents } from "./EventService";
import RegistrationForm from "./EventRegistrationForm";

function UserEvents() {
    const [events, setEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await getEvents();
                setEvents(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Available Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                        <button onClick={() => setSelectedEventId(event.id)}>
                            Register
                        </button>
                        {selectedEventId === event.id && (
                            <RegistrationForm eventId={event.id} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserEvents;
