import { useState, useEffect, useCallback } from 'react';

export const Cache_Between_Rerendering_Demo = () => {
  const [test1, setTest1] = useState(true);
  const [test2, setTest2] = useState(true);
  const myFunction = useCallback( // 2) cache this function between re-renders. w/o it anonymous function will be redefined
    () => { console.log('effect run ' + test1); }, 
    [test1] // 3) update function in cache on change of passed dependency
  );
  useEffect(
    () => { myFunction(); }, 
    [myFunction] // 1) run on update passed dependency  4) updated function will be called
  );
  console.log('render');
  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <h1>test2 value: {String(test2)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
      <button onClick={() => setTest2(!test2)}>Flip test value</button>
    </div>
  );
};
// ===================================================================
export const Call_When_Rerenderd_After_State_Value_Changed_Issue = () => {
  const [test1, setTest1] = useState(true);
  const [test2, setTest2] = useState(true);
  const myFunction = () => { console.log('effect run ' + test1); };
  useEffect(() => { myFunction(); }, [myFunction]);
  console.log('render');
  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <h1>test2 value: {String(test2)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
      <button onClick={() => setTest2(!test2)}>Flip test value</button>
    </div>
  );
};
