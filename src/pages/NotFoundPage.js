import React from 'react';

import Header from '../components/Header';

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="description card">
        <h2>404</h2>
        <div>This is not the page you are looking for</div>
      </div>
    </>
  );
}

export default NotFoundPage;
