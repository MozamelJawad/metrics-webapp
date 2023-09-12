import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link to="/">
      <i className="bi bi-arrow-left-short" />
    </Link>
    <div className="header-icon">
      <i className="bi bi-mic-fill" />
      <i className="bi bi-gear-fill" />
    </div>
  </div>
);

export default Header;
