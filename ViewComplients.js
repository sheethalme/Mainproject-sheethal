import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewComplients.css';  // Specific CSS for this page
import Navbar from './NavigationBar';

const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Add a specific class to the body when this page is active
    document.body.classList.add('view-complaints-page');

    // Fetch complaints
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/complaints');
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
        alert('Error fetching complaints');
      }
    };

    fetchComplaints();

    return () => {
      // Remove the class when leaving the page
      document.body.classList.remove('view-complaints-page');
    };
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image to be displayed separately
  };

  return (
    <div className="view-complaints">
      <Navbar />
      <div className="content">
        <main className="main">
          <h2>Complaints List</h2>
          <table className="complaints-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Location</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr key={index}>
                  <td>{complaint.description}</td>
                  <td>{complaint.location}</td>
                  <td>
                    <img
                      src={`data:image/jpeg;base64,${complaint.photo}`} // Assuming photo is returned as base64 encoded string
                      alt="Complaint"
                      className="complaint-image"
                      onClick={() => handleImageClick(`data:image/jpeg;base64,${complaint.photo}`)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>

      {/* Scrollable section for the enlarged image */}
      <div className="scrollable-section">
        {selectedImage && (
          <div className="image-viewer">
            <h3>Selected Complaint Image</h3>
            <img src={selectedImage} alt="Enlarged Complaint" className="enlarged-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewComplaints;
