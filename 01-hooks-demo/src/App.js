import React from 'react';

import UseStateExample from './components/use-state-example/use-state-example.component';
import CustomHookExample from './components/custom-hook-example/custom-hook-example.component';
import { UseStateExample1 } from './components/use-state-example/use-state-example-1.component';
import { UseStateExample2 } from './components/use-state-example/use-state-example-2.component';


import './App.css';

const App = props => {
  return (
    <div>
      <UseStateExample />
      <UseStateExample1 />
      <UseStateExample2 />
    </div>
  )
  // return <UseStateExample />;
  // return <CustomHookExample />;
  // return <UseReducerExample />
};

export default App;
