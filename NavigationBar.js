// Navbar.jsx
import React from 'react';
import './NavigationBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Admin Dashboard</h1>
      <ul className="nav-links">
        <li><a href="AdminDashboard" className="nav-link">Home</a></li>
        <li><a href="/AdminviewUsers" className="nav-link">Users</a></li>
        <li><a href="/AdminviewAdmins" className="nav-link">Admins</a></li>
        <li><a href="/AdminContactPage" className="nav-link">Contacts</a></li>
        <li><a href="/Logout" className="nav-link">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
