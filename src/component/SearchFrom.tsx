import React from 'react';

export const SearchForm = (props: {
  searchQuery: string;
  setSearchQuery: (e: string) => void;
  setUrl: (e: string) => void;
}) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      props.setUrl(`https://hn.algolia.com/api/v1/search?query=${props.searchQuery}`)
    }}
  >
    <h4>Search news about: </h4>
    <input
      type="text"
      value={props.searchQuery}
      onChange={e => {
        props.setSearchQuery(e.target.value);
      }}
    />
    <button>Submit</button>
  </form>
);