import React, { useState } from 'react';
import './WasteCollection.css'; // Import the CSS file
import './UsersNavbar.css';
import UsersNavbar from './UsersNavbar';

const WasteDonationForm = () => {
  const [wasteType, setWasteType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [wardNo, setWardNo] = useState('');
  const [houseName, setHouseName] = useState('');
  const [place, setPlace] = useState('');
  const [collectionTime, setCollectionTime] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      wasteType,
      quantity,
      wardNo,
      houseName,
      place,
      collectionTime
    };

    try {
      const response = await fetch('http://localhost:8080/api/waste-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Waste donation request submitted successfully!');
      } else {
        alert('There was an error submitting the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred, please try again later.');
    }
  };

  return (
    <div>
    <UsersNavbar />
    <div className="waste-donation-page"> {/* Specific class for this page */}
     
      <div className="waste-donation-form-container"> {/* Apply the class here */}
        <h2>Waste Donation Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Type of Waste:
            <input
              type="text"
              value={wasteType}
              onChange={(e) => setWasteType(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Quantity:
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Ward No:
            <input
              type="text"
              value={wardNo}
              onChange={(e) => setWardNo(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            House Name:
            <input
              type="text"
              value={houseName}
              onChange={(e) => setHouseName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Place:
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Preferred Collection Time:
            <input
              type="datetime-local"
              value={collectionTime}
              onChange={(e) => setCollectionTime(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default WasteDonationForm;
