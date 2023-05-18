/* eslint-disable no-unused-vars */
import React from 'react';
import './404Page.css';

const NotFound = () => {
  const handleButtonClick = () => {
    // Handle the click event here to redirect to the blogs site
    window.location.href = '/blogs'; // Replace with the desired URL or route
  };

  return (
    <div className="not-found">
      <div className="content">
        <h1>OOPS!!</h1> <br/>
        <h2>404 NOT FOUND!</h2>
        <p>The URL you are looking for is not available</p>
        <button className="cta-button" onClick={handleButtonClick}>
          Click here for homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
