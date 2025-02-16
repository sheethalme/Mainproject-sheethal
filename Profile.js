import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import UsersNavbar from './UsersNavbar'; // Import the Navigation component
const ProfilePage = () => {
  const [profile, setProfile] = useState({
    userName: '',
    houseName: '',
    wardNumber: '',
    houseNumber: '',
    phoneNumber: '',
    place: '',
  });
  const [editMode, setEditMode] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user?.resId;
      if (!userId) {
        alert('User ID is missing. Please log in again.');
        return;
      }
      const apiUrl = `http://localhost:8080/api/panchayatusers/${userId}`;
      axios
        .get(apiUrl)
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          alert('Failed to fetch user data.');
        });
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      alert('Failed to access user data. Please try again.');
    }
  }, []);
  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user?.resId;
      const apiUrl = `http://localhost:8080/api/panchayatusers/${userId}`;
      const formData = new FormData();
      formData.append(
        'userData',
        JSON.stringify({
          userName: profile.userName,
          houseName: profile.houseName,
          wardNumber: profile.wardNumber,
          houseNumber: profile.houseNumber,
          phoneNumber: profile.phoneNumber,
          place: profile.place,
        })
      );
      // if (selectedFile) {
      //   formData.append('profilePicture', selectedFile);
      // }
      const response = await axios.put(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user.authToken}`,
        },
      });
      if (response.status === 200) {
        alert(response.data || 'Profile updated successfully!');
        setEditMode(false);
      } else {
        alert('Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Error details:', error.response);
      alert(`An error occurred: ${error.response?.statusText || error.message}`);
    }
  };
  return (
    <div>
      <UsersNavbar/>
    <div className="profile-page">
      {!editMode } {/* Render Navigation only when not in edit mode */}
      <div className="profile-container">
        <h1>Profile Page</h1>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            {/* <div className="profile-picture">
              {selectedFile ? (
                <img src={URL.createObjectURL(selectedFile)} alt="User's profile" />
              ) : (
                <div className="upload-placeholder">No Image</div>
              )}
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleFileChange}
              />
              <label className="upload-btn" htmlFor="profilePicture">Choose File</label>
            </div> */}
            <div className="form-row">
              <label>User Name:</label>
              <input
                type="text"
                name="userName"
                value={profile.userName}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="form-row">
              <label>House Name:</label>
              <input
                type="text"
                name="houseName"
                value={profile.houseName}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label>Ward Number:</label>
              <input
                type="number"
                name="wardNumber"
                value={profile.wardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label>House Number:</label>
              <input
                type="number"
                name="houseNumber"
                value={profile.houseNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label>Place:</label>
              <input
                type="text"
                name="place"
                value={profile.place}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Update Profile</button>
            <button type="button" onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <div className="profile-details">
            {/* <div className="profile-picture">
              {profile.profilePicture ? (
                <img src={profile.profilePicture} alt="User's profile" />
              ) : (
                <div className="upload-placeholder">No Image</div>
              )}
            </div> */}
            <p><strong>User Name:</strong> {profile.userName}</p>
            <p><strong>House Name:</strong> {profile.houseName}</p>
            <p><strong>Ward Number:</strong> {profile.wardNumber}</p>
            <p><strong>House Number:</strong> {profile.houseNumber}</p>
            <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
            <p><strong>Place:</strong> {profile.place}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
export default ProfilePage;  