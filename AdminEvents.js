import React, { useState } from 'react';
import { createEvent } from './EventService';
import './AdminEvent.css';
import Navbar from './NavigationBar';

function AdminEventLoading() {
    const [event, setEvent] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
    });

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEvent(event);
            alert('Event created successfully!');
            setEvent({ title: '', description: '', date: '', location: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
        <Navbar/>
        <div className="admin-event-loading">
            <h1>Admin Event Loading</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Event Title"
                    value={event.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Event Description"
                    value={event.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="date"
                    name="date"
                    value={event.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Event Location"
                    value={event.location}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Create Event</button>
            </form>
        </div>
        </div>
    );
}

export default AdminEventLoading;
