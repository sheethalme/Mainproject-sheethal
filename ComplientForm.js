import React, { useState } from 'react';
import './ComplientForm.css';
import axios from 'axios';
import UsersNavbar from './UsersNavbar';

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState({
    description: '',
    location: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint({ ...complaint, [name]: value });
  };

  const handleFileChange = (e) => {
    setComplaint({ ...complaint, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!complaint.description || !complaint.location || !complaint.photo) {
      alert('Please fill in all the fields.');
      return;
    }

    const formData = new FormData();
    formData.append('description', complaint.description);
    formData.append('location', complaint.location);
    formData.append('photo', complaint.photo);

    try {
      const response = await axios.post('http://localhost:8080/api/complaints', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Complaint registered successfully!');
    } catch (error) {
      console.error(error);
      alert(`Error registering complaint: ${error.message}`);
    }
  };

  return (
    <div id="complaint-page"> {/* Added ID here */}
      <UsersNavbar />
      <div className="complaint-form-container">
        <h2>Register Complaints</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <textarea
              name="description"
              value={complaint.description}
              onChange={handleChange}
              required
              placeholder="Describe the issue..."
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={complaint.location}
              onChange={handleChange}
              required
              placeholder="Enter location"
            />
          </label>
          <label>
            Geo-tagged Photo:
            <input type="file" name="photo" accept="image/*" onChange={handleFileChange} required />
          </label>
          <button type="submit" className="submit-button">Submit Complaint</button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
