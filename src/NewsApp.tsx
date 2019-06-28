import React, { useState, useEffect } from 'react';
const axios = require('axios');

interface NewsProps {
  title: string
}

export const NewsApp = () => {

  const [news, setNews] = useState([] as NewsProps[]);
  const [searchQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
    .then((res: any) => { setNews(res.data.hits); })
    .then(() => setLoading(false))
    .catch((err: any) => console.log(err));
  }, [url]);

  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault();
          setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
        }}
      >
        <h4>Search news about: </h4>
        <input 
          type="text"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <h2>React News:</h2>
      {loading ? <h2>Loading...</h2> : undefined}
      <ul>
        {news.map((n) => (
          <li>{n.title}</li>
        ))}
        {console.log(news)}
      </ul>
    </div>
  );
};