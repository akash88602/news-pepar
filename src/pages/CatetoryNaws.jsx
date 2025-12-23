import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'; // use react-router-dom
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNaws = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [category, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id === '0') {
      setCategoryNews(data);
    } else if (id === '1') {
      const filteredNews = data.filter(news => news?.others?.is_today_pick === true);
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(news => news.category_id === Number(id));
      setCategoryNews(filteredNews);
    }
  }, [id, data]);

  return (
    <div > 
      <h2 className="text-lg font-semibold mb-4 text-start">
        Total {category.length} news found
      </h2>

      <div className="grid grid-cols-1 gap-5">
        {category.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNaws;
