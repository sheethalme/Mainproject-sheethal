// Navbar.js
import React from 'react';
import './NavigationBar.css'; // Add your styles here

function LoginNavBar() {
  return (
    <nav className="navbar">
      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="googlemap">About</a></li>
        <li><a href="ContactPage">Contact</a></li>
      </ul>
    </nav>
  );
}

export default LoginNavBar;
