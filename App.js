import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSign from './Components/Register';
import Home from './Components/Homepage';
import Profile from './Components/Profile'; // Import ProfilePage component
import ComplaintForm from './Components/ComplientForm'; // Import ComplaintForm component
import Navbar from './Components/NavigationBar';
import EventList from './Components/EventsList';
import AdminDashboard from './Components/Admin-dashboard';
import AdminviewUsers from './Components/AdminviewUsers';
import AdminviewAdmins from './Components/AdminviewAdmin';
import AdminContactPage from './Components/UsersContact';
import UsersNavbar from './Components/UsersNavbar';
import AdminEvent from './Components/AdminEvents';
import AdminPanel from './Components/AdminVideos';
import UserDashboard from './Components/UserVideos';
import Logout from './Components/Logout';
import WasteDonationForm from './Components/WasteCollection';
import AdminWaste from './Components/AdminWaste';
import FrontPage from './Components/FrontPage';
import RegistrationForm from './Components/EventRegistrationForm';
import AdminViewEvents from './Components/AdminViewEvents';
import GoogleMapIframe from './Components/Anakkara';
import ValuesPage from './Components/OurMission';
import ContactPage from './Components/ContactUs';
import LoginNavBar from './Components/LoginNavBar';
import ViewComplients from './Components/ViewComplients';
import ResetPassword from './Components/ResetPass';
import ForgetPassword from './Components/ForgotPass';

  



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route path="/LoginSign" element={<LoginSign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} /> {/* Add this line */}
          <Route path="/complaint" element={<ComplaintForm />} /> {/* Add this line for complaints */}
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/EventList" element={<EventList />} />
          <Route path="/AdminViewEvents" element={<AdminViewEvents />} />
          <Route path="/AdminEvent" element={<AdminEvent/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/AdminviewUsers" element={<AdminviewUsers/>}/>
          <Route path="/AdminviewAdmins" element={<AdminviewAdmins/>}/>
          <Route path="/AdminContactPage" element={<AdminContactPage/>}/>
          <Route path="/UsersNavBar" element={<UsersNavbar/>}/>
          <Route path="/AdminPanel" element={<AdminPanel/>}/>
          <Route path="/UserDashboard" element={<UserDashboard/>}/>
          <Route path="/Logout" element={<Logout/>}/>
          <Route path="/WasteDonationForm" element={<WasteDonationForm/>}/>
          <Route path="/AdminWaste" element={<AdminWaste/>}/>
          <Route path="/RegistrationForm/:eventId" element={<RegistrationForm />} />
          <Route path="googlemap" element={<GoogleMapIframe />} />
          <Route path="Valuespage" element={< ValuesPage/>} />
          <Route path="ContactPage" element={< ContactPage/>} />
          <Route path="LoginNavBar" element={< LoginNavBar/>} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="ViewComplients" element={<ViewComplients />} />
         
          
          
          
          


        </Routes>
      </div>
    </Router>
  );
}

export default App;
