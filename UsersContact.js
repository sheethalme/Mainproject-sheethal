import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UsersContact.css'; // Ensure this file exists and is correctly linked
import Navbar from './NavigationBar';

function AdminContactPage() {
  const [contacts, setContacts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch contact data
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/panchayatusers');
      const contactDetails = response.data.map(user => ({
        userName: user.userName,
        phoneNumber: user.phoneNumber,
      }));
      setContacts(contactDetails);
      setErrorMessage(''); // Clear errors on successful fetch
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setErrorMessage('Failed to fetch contacts. Please try again.');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div><Navbar/>
    <div className="admin-contact-page">
      
      <h1>Contact Information</h1>

      {/* Display error messages */}
      {errorMessage && <p className="admin-error">{errorMessage}</p>}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <tr key={index}> {/* Ensure each child has a unique key */}
                <td>{contact.userName}</td>
                <td>{contact.phoneNumber}</td>
                <td>
                  <a href={`tel:${contact.phoneNumber}`} className="admin-call-button">Call</a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
                No contacts available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div> 
  );
}

export default AdminContactPage;
