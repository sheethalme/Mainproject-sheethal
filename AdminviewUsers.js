import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminviewUsers.css'; // Ensure this file exists and is correctly linked
import Navbar from './NavigationBar';

function AdminviewUsers() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch user data
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/panchayatusers');
      const filteredUsers = response.data.filter(user => user.role !== 'Admin'); // Exclude admins
      setUsers(filteredUsers);
      setErrorMessage(''); // Clear errors on successful fetch
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage('Failed to fetch users. Please try again.');
    }
  };

  // Delete user by ID
  const handleDelete = async (resId) => {
    console.log('Deleting user with ID:', resId); // Debugging log
    try {
      const response = await axios.delete(`http://localhost:8080/api/deletepanchayatusers/${resId}`);
      if (response.status === 200) {
        setSuccessMessage('User deleted successfully');
        setErrorMessage('');
        fetchUsers(); // Refresh the user list
      } else {
        throw new Error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      setErrorMessage('Failed to delete user. Please try again.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="admin-view-users">
        <h1>User Management</h1>

        {/* Display success or error messages */}
        {errorMessage && <p className="admin-error">{errorMessage}</p>}
        {successMessage && <p className="admin-success">{successMessage}</p>}

        <table className="admin-table">
          <thead>
            <tr>
              <th>User Name</th>
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
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.resId}> {/* Ensure each child has a unique key */}
                  <td>{user.userName}</td>
                  <td>{user.houseName}</td>
                  <td>{user.wardNumber}</td>
                  <td>{user.houseNumber}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.place}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="admin-delete-button"
                      onClick={() => {
                        console.log('Deleting user:', user); // Debugging log
                        handleDelete(user.resId); // Updated to use resId
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
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminviewUsers;
