import React, { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

import Header from '../components/Header';
import LogInForm from '../components/LogInForm';

function NotFoundPage() {
  const { token } = useContext(AuthContext);

  return (
    <>
      {token ? <Header /> : <LogInForm />}
      <div className="description card">
        <h2>404</h2>
        <div>This is not the page you are looking for</div>
      </div>
    </>
  );
}

export default NotFoundPage;
