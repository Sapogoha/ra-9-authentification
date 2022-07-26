import React from 'react';
// import PropTypes from 'prop-types'

import Header from '../components/Header';
import NewsItem from '../components/News/NewsItem';

function SingleNewsPage() {
  const news = {
    id: 1,
    title: 'er2 REW wer wer',
    image: 'https://placeimg.com/640/480/nature',
    content: 'er2 REW wer wer',
  };
  return (
    <>
      <Header />
      <div className="card single-news" style={{ width: '90%' }}>
        {<NewsItem news={news} />}
      </div>
    </>
  );
}
// SingleNewsPage.propTypes = {}

export default SingleNewsPage;
