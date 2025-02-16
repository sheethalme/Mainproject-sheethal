import React, { useEffect, useState } from "react";
import axios from "axios";
import './AdminViewEvents.css';
 import Navbar from "./NavigationBar";

function AdminViewEvents() {
    const [eventId, setEventId] = useState(null); // The event for which to fetch registrations
    const [users, setUsers] = useState([]); // Registered users for the selected event
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (eventId) {
            fetchRegistrations(eventId);
        }
    }, [eventId]);

    const fetchRegistrations = async (eventId) => {
        try {
            const token = localStorage.getItem("token"); // Get token for authentication
            const response = await axios.get(
                `http://localhost:8080/api/registrations/eventget/${eventId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setUsers(response.data);
        } catch (error) {
            setErrorMessage("Failed to fetch registrations.");
            console.error("Error fetching registrations:", error);
        }
    };

    return (
        <div>
       <Navbar/>
        <div className="admin-view-events">
            <h1>Event Registrations</h1>
            
            {/* Error message display */}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            {/* Dropdown to select an event */}
            <div>
                <label htmlFor="eventId">Select Event</label>
                <select
                    id="eventId"
                    onChange={(e) => setEventId(e.target.value)}
                    value={eventId || ""}
                >
                    <option value="">-- Select an Event --</option>
                    {/* Populate options dynamically, example */}
                    <option value="1">Event 1</option>
                    <option value="2">Event 2</option>
                    <option value="3">Event 3</option>
                </select>
            </div>

            {/* Display the registered users if there are any */}
            {users.length > 0 ? (
                <table className="registration-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>House Name</th>
                            <th>Ward Number</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.houseName}</td>
                                <td>{user.wardNumber}</td>
                                <td>{user.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users registered for this event yet.</p>
            )}
        </div>
         </div>
    );
}

export default AdminViewEvents;
