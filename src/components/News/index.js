import React from 'react';
// import PropTypes from 'prop-types'

import NewsItem from './NewsItem';

function News() {
  const news = [
    {
      id: 1,
      title: 'er2 REW wer wer',
      image: 'https://placeimg.com/640/480/nature',
      content: 'er2 REW wer wer',
    },
    {
      id: 2,
      title: 'er2 REW wer wer',
      image: 'https://placeimg.com/640/480/arch',
      content: 'er2 REW wer wer',
    },
    {
      id: 3,
      title: 'er2 REW wer wer',
      image: 'https://placeimg.com/640/480/tech',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat quia ratione magnam libero odit molestiae quam, ea facere nesciunt?',
    },
    {
      id: 4,
      title: 'er2 REW wer wer',
      image: 'https://placeimg.com/640/480/sepia',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, fugit.',
    },
  ];
  return (
    <ul className="news-container">
      {news.length > 0
        ? news.map((item) => (
            <li
              key={item.id}
              className="card news-item"
              // style={{ width: '45%' }}
            >
              <NewsItem news={item} />
            </li>
          ))
        : 'No news'}
    </ul>
  );
}

// News.propTypes = {}

export default News;
