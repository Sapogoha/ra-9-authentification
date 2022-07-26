import React from 'react';
// import PropTypes from 'prop-types'

import Header from '../components/Header';
import News from '../components/News';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <News />
    </div>
  );
}

// MainPage.propTypes = {}

export default MainPage;
