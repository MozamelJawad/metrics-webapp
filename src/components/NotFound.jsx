import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound">
      <h3>Page Not Found</h3>
      <p className="goTo"><Link to="/">Got to Home page</Link></p>
    </div>
  );
}

export default NotFound;
