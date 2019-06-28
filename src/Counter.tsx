import React, { useState, useEffect } from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);
  
  // useEffect(() => {
  //   return () => {
  //     document.title = `Counter Value is ${counter}`;
  //   };
  // }, [counter])

  useEffect(() => {
    document.title = `Counter Value is ${counter}`;
  });

  return (
    <div>
      <h2>Counter</h2>
      <h4>Value is: {counter}</h4>
      <button onClick={() => setCounter(counter + 1)}>Increase counter value</button>
    </div>
  );
};