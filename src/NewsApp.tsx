import React, { useState, useEffect } from 'react';
import { Loading } from './component/Loading';
import { SearchForm } from './component/SearchFrom';
import { NewsList } from './component/NewsList';
const axios = require('axios');

export interface NewsProps {
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
      <SearchForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setUrl={setUrl}
      />
      <h2>React News:</h2>
      {loading ? <Loading /> : undefined}
      <NewsList news={news} />
    </div>
  );
};