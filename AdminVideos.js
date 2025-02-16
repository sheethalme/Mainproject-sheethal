import React, { useState } from 'react';
import axios from 'axios';
import './AdminVideo.css'; // Import the admin panel-specific CSS
import Navbar from './NavigationBar';

function AdminPanel() {
    const [newVideo, setNewVideo] = useState({ title: '', description: '', videoUrl: '' });

    // Add a new video (Admin functionality)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/videos/post', newVideo);
            setNewVideo({ title: '', description: '', videoUrl: '' });
            alert('Video added successfully!');
        } catch (error) {
            console.error('Error adding video:', error);
            alert('Failed to add video.');
        }
    };

    return (
        <div>
            <Navbar/>
        <div className="admin-panel"> {/* Apply the root class */}
            <div className="admin-container"> {/* Container for styling */}
                <h2 className="admin-header">Admin Panel: Add Video</h2>
                <form className="admin-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newVideo.title}
                        onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newVideo.description}
                        onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="YouTube Video link"
                        value={newVideo.videoUrl}
                        onChange={(e) => setNewVideo({ ...newVideo, videoUrl: e.target.value })}
                        required
                    />
                    <button type="submit">Add Video</button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default AdminPanel;
