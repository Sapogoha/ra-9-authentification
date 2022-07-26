import React, { useContext } from 'react';
// import PropTypes from 'prop-types'

import AuthContext from '../../contexts/AuthContext';

import { socialMediaName } from '../data/data';
// import styles from './index.module.css';

function Header() {
  const { profile, handleLogout } = useContext(AuthContext);
  console.log(profile);

  return (
    <div className="header">
      <div className="header-rightPart">
        <h1 className="header-logo">{socialMediaName}</h1>
      </div>

      <div className="header-leftPart">
        <h5 className="header-greeting">Hello, {profile.name}</h5>
        <img
          className="header-avatar"
          src={profile.avatar}
          alt={profile.name}
        />
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

// Header.propTypes = {}

export default Header;
