import React, { useState, useEffect } from 'react';
const axios = require('axios');

interface NewsProps {
  title: string
}

export const NewsApp = () => {

  const [news, setNews] = useState([] as NewsProps[]);

  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search?query=react')
    .then((res: any) => { setNews(res.data.hits); })
    .catch((err: any) => console.log(err));
  }, [news]);

  return (
    <div>
      <h2>React News:</h2>
      <ul>
        {news.map((n) => (
          <li>{n.title}</li>
        ))}
        {console.log(news)}
      </ul>
    </div>
  );
};