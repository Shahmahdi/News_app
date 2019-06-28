import React from 'react';
import { NewsProps } from '../NewsApp';

export const NewsList = (props: {
  news: NewsProps[];
}) => (
  <ul>
    {props.news.map((n) => (
      <li>{n.title}</li>
    ))}
  </ul>
);