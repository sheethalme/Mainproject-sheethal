import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginNavBar from './LoginNavBar'; // Import the Navbar component

function LoginSign() {
  const [action, setAction] = useState('login'); // Default action to 'login'
  const [formData, setFormData] = useState({
    userName: '',
    houseName: '',
    wardNumber: '',
    houseNumber: '',
    phoneNumber: '',
    place: '',
    email:'',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerLink = () => {
    setAction('register');
  };

  const loginLink = () => {
    setAction('login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (action === 'register') {
        // Registration Logic
        if (formData.password !== formData.confirmPassword) {
          setErrorMessage("Passwords don't match");
          return;
        }
        const response = await axios.post('http://localhost:8080/api/register', formData);
        if (response.status === 200) {
          setSuccessMessage('Registration successful');
          setErrorMessage('');
          alert('Registration successful');

          // Store registration data in localStorage
          const userData = {
            userName: formData.userName,
            houseName: formData.houseName,
            wardNumber: formData.wardNumber,
            houseNumber: formData.houseNumber,
            phoneNumber: formData.phoneNumber,
            email:formData.email,
            place: formData.place,
            role: formData.role,
          };
          localStorage.setItem('user', JSON.stringify(userData));

          // Clear form after registration
          setFormData({
            userName: '',
            houseName: '',
            houseNumber: '',
            wardNumber: '',
            phoneNumber: '',
            place: '',
            email:'',
            role: '',
            password: '',
            confirmPassword: '',
          });
        } else {
          setErrorMessage('Registration failed');
        }
      } else {
        // Login Logic
        const response = await axios.post('http://localhost:8080/api/login', {
          userName: formData.userName,
          password: formData.password,
        });
        if (response.status === 200) {
          // Store login data in localStorage
          const userData = response.data; // Assuming API response includes user data
          localStorage.setItem('user', JSON.stringify(userData));
          setSuccessMessage('Login successful');
          setErrorMessage('');
          // Navigate to the respective dashboard
          if (userData.role === 'Admin') {
            navigate('/AdminDashboard');
          } else if (userData.role === 'User') {
            navigate('/home');
          }
        } else {
          setErrorMessage('Login failed');
        }
      }
    } catch (error) {
      setErrorMessage(error.response?.data || 'An error occurred');
    }
  };

  return (
    <div className="registration-page">
      {action === 'login' && <LoginNavBar />} {/* Conditionally render Navbar */}
      <video autoPlay muted loop className="video-background">
        <source src="8190638-uhd_4096_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`wrapper ${action === 'register' ? 'active' : ''}`}>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        {action === 'login' || action === '' ? (
          <div className="form-box login active">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="text"
                  name="userName"
                  placeholder="Username"
                  required
                  value={formData.userName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <br />
              <div className="remember-forget">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="ForgetPassword">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
              <div className="register-link">
                <p>
                  Don't have an account?{' '}
                  <button type="button" onClick={registerLink} className="link-button">
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="form-box register active">
            <form onSubmit={handleSubmit}>
              <h1>Registration</h1>
              <div className="input-box">
                <input
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  required
                  value={formData.userName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="houseName"
                  placeholder="House Name"
                  required
                  value={formData.houseName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="number"
                  name="wardNumber"
                  placeholder="Ward Number"
                  required
                  value={formData.wardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="number"
                  name="houseNumber"
                  placeholder="House Number"
                  required
                  value={formData.houseNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="place"
                  placeholder="Place"
                  required
                  value={formData.place}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="select-box">
                <select
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="">-- Select Role --</option>
                  <option value="User">User</option>
            </select>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                </div>
                
              <div className="remember-forget">
                <label>
                  <input type="checkbox" /> I agree to the terms & conditions
                </label>
              </div>
              <button type="submit">Register</button>
              <div className="register-link">
                <p>
                  Already have an account?{' '}
                  <button type="button" onClick={loginLink} className="link-button">
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSign;
