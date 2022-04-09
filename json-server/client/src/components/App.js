import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import Header from './header/Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
