import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // // 01 // // is fired when 1) componentDidMount 2) EVERY re-rendering
  // useEffect(() => {console.log('hello from useEffect');});
  
  // // 02 // // is fired when 1) componentDidMount 2) ONCE re-renderied
  // useEffect(() => {console.log('hello from useEffect');},    []    );
  
  // // 03 // // is fired when 1) componentDidMount 2) ONCE re-renderied
  // useEffect(() => {
  //   const fetchFn = async () => {
  //     const response = await fetch('url');
  //     const data = await response.json();
  //     console.log(data[0]); // 1st element from returned array
  //   }
  //   fetchFn(); // // // for ASYNC action
  // }, []); // 
  
  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      const resJson = await response.json();
      setUser(resJson[0]); // 1) after setting state value, component will be re-rendered
    };

    if (searchQuery.length > 3) {
      fetchFunc();
    }

  // }, []); // 2) infinite re-rendering
  }, [searchQuery]); // 3) added watched prop for re-rendering component

  return (
    <Card>
      <input
        type='search'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseEffectExample;
