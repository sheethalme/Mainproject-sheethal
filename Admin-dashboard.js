import React from 'react';
import './Admin-dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-page container">
     <div>
                <section className="video-section">
                    <video className="background-video" autoPlay loop muted>
                        <source src="12352287_3840_2160_30fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </section>
                    </div>
      <nav className="navbar">
        <h1>Admin Dashboard</h1>
        <ul className="nav-links">
          <li><a href="/AdminEvent">Events</a></li>
          <li><a href="/AdminviewUsers">Users</a></li>
          <li><a href="/AdminviewAdmins">Admins</a></li>
          <li><a href="/AdminContactPage">Contacts</a></li>
          <li><a href="/AdminPanel">videos</a></li>
        </ul>
      </nav>
      <div className="content">
        <aside className="sidebar">
        <ul> 
          
           <li><a href="/AdminViewEvents">Events</a></li>
            
            <li><a href="/AdminWaste">Waste</a></li> 
            <li><a href="ViewComplients">complaints</a></li> 
            <li><a href="/Logout">Logout</a></li> 
            </ul>
        </aside>
       
      </div>
    </div>
  );
};

export default AdminDashboard;
