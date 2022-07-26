import React from 'react';
// import PropTypes from 'prop-types'

import LogInForm from '../components/LogInForm';
import Description from '../components/Description';

function LandingPage() {
  return (
    <div className="landing-page">
      <LogInForm />
      <Description />
    </div>
  );
}

// LandingPage.propTypes = {}

export default LandingPage;
