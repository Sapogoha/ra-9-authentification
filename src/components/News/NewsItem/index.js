import React from 'react';
// import PropTypes from 'prop-types'

function NewsItem({ news }) {
  if (!news) {
    return null;
  }

  return (
    <>
      <img src={news.image} alt={news.title} />
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.content}</p>
      </div>
    </>
  );
}

// NewsItem.propTypes = {}

export default NewsItem;
