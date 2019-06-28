import React, { useState, useEffect } from 'react';
const axios = require('axios');

interface NewsProps {
  title: string
}

export const NewsApp = () => {

  const [news, setNews] = useState([] as NewsProps[]);
  const [searchQuery, setSearchQuery] = useState('react')

  useEffect(() => {
    axios.get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    .then((res: any) => { setNews(res.data.hits); })
    .catch((err: any) => console.log(err));
  }, [searchQuery]);

  return (
    <div>
      <form>
        <h4>Search text: </h4>
        <input 
          type="text"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        />
      </form>
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