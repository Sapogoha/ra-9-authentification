import React from 'react';
// import PropTypes from 'prop-types'

import { socialMediaName } from '../data/data';

function Description() {
  return (
    <div className="description card">
      <h2>{socialMediaName}</h2>
      <div>Some catchy slogan</div>
    </div>
  );
}

// Description.propTypes = {}

export default Description;
