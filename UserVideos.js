import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersNavbar from './UsersNavbar'; 
import './UserVideo.css'; // Import the user dashboard-specific CSS

function UserDashboard() {
    const [videos, setVideos] = useState([]);

    // Fetch videos from the backend
    // useEffect(() => {
    //     const fetchVideos = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8080/api/videos/get');
    //             setVideos(response.data);
    //             console.log('Fetched videos:', response.data);
    //         } catch (error) {
    //             console.error('Error fetching videos:', error);
    //         }
    //     };

    //     fetchVideos();
    // }, []);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/videos/get');
                setVideos(response.data);
                console.log('Fetched videos:', response.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    // Helper function to extract video ID from a YouTube URL
    const extractVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null; // Return the video ID or null if not found
    };


    return (
        <div>
            <UsersNavbar />
            <div className="user-dashboard"> {/* Apply the root class */}
                <div className="user-container"> {/* Container for styling */}
                    <h2 className="user-header">Awareness Videos</h2>
                    <ul className="user-list"> {/* List styling */}
                        {videos.map((video) => (
                            <li key={video.id} className="user-item">
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                                {/* <iframe 
                                    width="560" 
                                    height="315" 
                                    src={`https://www.youtube-nocookie.com/embed/${video.video_url}`}  
                                    title={video.title}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                ></iframe> */}

                                <iframe width="560"
                                 height="315" 
                                 src={`https://www.youtube-nocookie.com/embed/${extractVideoId(video.videoUrl)}`}
                                 title="YouTube video player" 
                                 frameborder="0" 
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                 referrerpolicy="strict-origin-when-cross-origin" 
                                 allowfullscreen></iframe>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
