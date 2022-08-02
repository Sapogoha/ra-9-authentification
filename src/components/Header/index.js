import React, { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

import { socialMediaName } from '../data/data';

function Header() {
  const { profile, handleLogout, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/');
  };

  return (
    token && (
      <div className="header">
        <div className="header-rightPart">
          <Link to={`/news`}>
            <h1 className="header-logo">{socialMediaName}</h1>
          </Link>
        </div>

        <div className="header-leftPart">
          <h5 className="header-greeting">{`Hello, ${profile.name}`}</h5>
          <img
            className="header-avatar"
            src={profile.avatar}
            alt={profile.login}
          />

          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
}

export default Header;
