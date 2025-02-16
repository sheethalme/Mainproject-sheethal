import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './UsersNavbar.css';

const UsersNavbar = () => {
  return (
    <header>
      <nav className="user-navbar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/complaint">complient</Link></li>
          <li><Link to="/EventList">events</Link></li>
          <li><Link to="/WasteDonationForm">waste</Link></li>
          <li><Link to="/Logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default UsersNavbar;
