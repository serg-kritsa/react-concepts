import React from 'react';
import PostList from './joined/PostList';
// import PostList from './duplicated-requests/PostList';
// import PostList from './memoized/PostList';

const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;
