import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>
      <h3>Page Not Found</h3>
      <p style={{ marginTop: '1rem', color: 'blue' }}><Link to="/">Got to Home page</Link></p>
    </div>
  );
}

export default NotFound;
