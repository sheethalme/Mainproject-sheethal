import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminViewAdmin.css'; // Ensure this file exists and is correctly linked
import Navbar from './NavigationBar';

function AdminviewAdmins() {
  const [admins, setAdmins] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch admin data
  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/panchayatusers');
      const filteredAdmins = response.data.filter(user => user.role === 'Admin'); // Only include admins
      setAdmins(filteredAdmins);
      setErrorMessage(''); // Clear errors on successful fetch
    } catch (error) {
      console.error('Error fetching admins:', error);
      setErrorMessage('Failed to fetch admins. Please try again.');
    }
  };

  // Delete admin by ID
  const handleDelete = async (resId) => {
    console.log('Deleting admin with ID:', resId); // Debugging log
    try {
      const response = await axios.delete(`http://localhost:8080/api/deletepanchayatusers/${resId}`);
      if (response.status === 200) {
        setSuccessMessage('Admin deleted successfully');
        setErrorMessage('');
        fetchAdmins(); // Refresh the admin list
      } else {
        throw new Error('Failed to delete admin');
      }
    } catch (error) {
      console.error('Error deleting admin:', error);
      setErrorMessage('Failed to delete admin. Please try again.');
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="admin-view-admins">
        <h1>Admin Management</h1>

        {/* Display success or error messages */}
        {errorMessage && <p className="admin-error">{errorMessage}</p>}
        {successMessage && <p className="admin-success">{successMessage}</p>}

        <table className="admin-table">
          <thead>
            <tr>
              <th>Admin Name</th>
              <th>House Name</th>
              <th>Ward Number</th>
              <th>House Number</th>
              <th>Phone Number</th>
              <th>Place</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.length > 0 ? (
              admins.map((admin) => (
                <tr key={admin.resId}> {/* Ensure each child has a unique key */}
                  <td>{admin.userName}</td>
                  <td>{admin.houseName}</td>
                  <td>{admin.wardNumber}</td>
                  <td>{admin.houseNumber}</td>
                  <td>{admin.phoneNumber}</td>
                  <td>{admin.place}</td>
                  <td>{admin.role}</td>
                  <td>
                    <button
                      className="admin-delete-button"
                      onClick={() => {
                        console.log('Deleting admin:', admin); // Debugging log
                        handleDelete(admin.resId); // Updated to use resId
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center' }}>
                  No admins available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminviewAdmins;
