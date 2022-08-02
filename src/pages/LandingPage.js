import React from 'react';

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

export default LandingPage;
