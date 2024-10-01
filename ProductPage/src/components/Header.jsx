// Header.jsx
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Optional for styling
imort searchbar

const Header = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate to the previous page in the history
  };

  return (
    <header className="header">



      <button className="back-btn" onClick={goBack}>
        ← Back
      </button>
      <h1 className="header-title">My E-Commerce</h1>
    </header>
  );
};

export default Header;