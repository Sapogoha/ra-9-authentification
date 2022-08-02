import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import News from '../components/News';
import AuthContext from '../contexts/AuthContext';

function MainPage() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <div className="main-page">
      <Header />
      <News />
    </div>
  );
}

export default MainPage;
