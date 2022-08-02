import React, { useContext, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';
import AuthContext from '../../contexts/AuthContext';

function News() {
  const [news, setNews] = useState([]);
  const { token } = useContext(AuthContext);

  const getNews = async (token) => {
    try {
      const data = await fetch(`${process.env.REACT_APP_DATA_URL}news`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const news = await data.json();

      setNews(news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews(token);
  }, []);

  return (
    <ul className="news-container">
      {news.length > 0
        ? news.map((item) => (
            <li key={item.id} className="card news-item">
              <Link to={`/news/${item.id}`}>
                <NewsItem news={item} />
              </Link>
            </li>
          ))
        : 'No news'}
    </ul>
  );
}

export default News;
