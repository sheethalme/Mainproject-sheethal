import React, { useEffect, useState } from 'react';
import './AdminWaste.css'; // Import the CSS file
import Navbar from './NavigationBar';

const AdminWaste = () => {
  const [wasteDonations, setWasteDonations] = useState([]);
  const [error, setError] = useState(null);

  // Fetch waste donations when the component is mounted
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/waste-donation'); // Endpoint to get waste donations
        if (!response.ok) {
          throw new Error('Failed to fetch waste donations');
        }
        const data = await response.json();
        setWasteDonations(data); // Set the fetched data to state
      } catch (error) {
        setError(error.message); // Set error message if API call fails
      }
    };

    fetchDonations();
  }, []); // Empty dependency array ensures it runs only once on component mount

  return (
    <div>
    <Navbar/>
    <div className="admin-waste-container">
      <h2>Waste Donation Requests</h2>

      {/* Error message when there's an issue with fetching data */}
      {error && <p className="error-message">{error}</p>}

      {/* Table to display the waste donation requests */}
      <table className="admin-waste-table">
        <thead>
          <tr>
            <th>Waste Type</th>
            <th>Quantity</th>
            <th>Ward No</th>
            <th>House Name</th>
            <th>Place</th>
            <th>Collection Time</th>
          </tr>
        </thead>
        <tbody>
          {wasteDonations.length > 0 ? (
            wasteDonations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.wasteType}</td>
                <td>{donation.quantity}</td>
                <td>{donation.wardNo}</td>
                <td>{donation.houseName}</td>
                <td>{donation.place}</td>
                <td>{donation.collectionTime}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No waste donation requests available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminWaste;
