/* eslint-disable no-unused-vars */
import React from 'react';
import './Landing-Page.css';

const LandingPage = () => {
  const handleButtonClick = () => {
    // Handle the click event here to redirect to the blogs site
    window.location.href = '/blogs'; // Replace with the desired URL or route
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to Our Blog Site</h1>
        <p>Discover the latest articles and stories on various topics.</p>
        <button className="cta-button" onClick={handleButtonClick}>
          Click here to view the blogs
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
