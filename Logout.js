import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the user data from localStorage
    localStorage.removeItem('user');

    // Optionally, you can also clear sessionStorage or other data
    sessionStorage.clear();

    // Redirect the user to the login page after logging out
    navigate("/LoginSign");  // Or navigate('/'); to go to the home page
  }, [navigate]);

  return null; // You can redirect without rendering anything
};

export default Logout;
