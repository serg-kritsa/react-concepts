import { useState, useEffect } from 'react';

export const Define_Inside_UseEffect_Demo = () => {
  const [test1, setTest1] = useState(true);
  const [test2, setTest2] = useState(true);
  useEffect(() => { 
    const myFunction = () => {
      console.log('effect of ' + test1);
    }; 
    myFunction()
  }, [test1]);
  console.log('render');
  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
      <h1>test2 value: {String(test2)}</h1>
      <button onClick={() => setTest2(!test2)}>Flip test value</button>
    </div>
  );
};
// ===================================================================
// Workaround // // define outside
// 1) if function does not depend from component, up it to avoid re-rendering
const consoleMessage = () => { console.log('effect run'); }
export const Define_Outside_Component_Demo = () => {
  const [test1, setTest1] = useState(true);
  useEffect(() => { consoleMessage(); }, []); // 2) will be called once
  console.log('render');
  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
    </div>
  );
};
// ===================================================================
export const Anonymous_Function_Call_Issue_On_State_Change_Demo = () => {
  const [test1, setTest1] = useState(true);
  // 1) anonymous function gets new address in memory on re-rendering
  // => after changing state value it will be called
  const consoleMessage = () => { console.log('effect run'); }

  //                                      2) passed dependency considered as updated
  useEffect(() => { consoleMessage(); }, [consoleMessage]); 
  console.log('render');
  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
    </div>
  );
};
// ===================================================================
export const UseEffect_Rerender_Flow_From_Top_To_Bottom_Demo = () => {
  const [test1, setTest1] = useState(true);
  useEffect(() => { console.log('effect run'); }, []);
  console.log('render');
  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
    </div>
  );
};
