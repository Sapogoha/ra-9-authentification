import React, { useContext, useEffect, useState } from 'react';

import Header from '../components/Header';
import NewsItem from '../components/News/NewsItem';
import AuthContext from '../contexts/AuthContext';
import NotFoundPage from './NotFoundPage';

import { useParams, useNavigate } from 'react-router-dom';

function SingleNewsPage() {
  const { newsId } = useParams();
  const { token } = useContext(AuthContext);
  const [newsItem, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/');
  }, []);

  const getNewsItem = async (token) => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_DATA_URL}news/${newsId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newsItem = await data.json();

      setNews(newsItem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsItem(token);
  }, []);

  return newsItem.id ? (
    <>
      <Header />
      <div className="card single-news" style={{ width: '70%' }}>
        {<NewsItem news={newsItem} />}
      </div>
    </>
  ) : (
    <NotFoundPage />
  );
}

export default SingleNewsPage;
