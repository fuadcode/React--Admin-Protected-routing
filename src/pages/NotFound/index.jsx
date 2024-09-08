import React from 'react';
import './index.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-heading">404</h1>
        <p className="notfound-message">Oops! Page Not Found</p>
        <p className="notfound-description">The page you are looking for does not exist. It might have been moved or deleted.</p>
        <a href="/" className="notfound-link">Go Back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
