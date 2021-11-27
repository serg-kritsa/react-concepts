import React from 'react';

import UseStateExample from './components/use-state-example/use-state-example.component';
import CustomHookExample from './components/custom-hook-example/custom-hook-example.component';

import './App.css';

const App = props => {
  return <UseStateExample />;
  // return <CustomHookExample />;
  // return <UseReducerExample />
};

export default App;
