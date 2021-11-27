import { useState, useEffect, useMemo } from 'react';

export const UseEffectExample = () => {
  const [test1, setTest1] = useState(true);
  const [test2, setTest2] = useState(true);

  const myObj = useMemo( // 2) cache object reference between re-rendering    6) reference update
    () => ( 
      // 5) object 
      { a: 'my value of a is ' + test1 }
    ),
    [test1] // 4) update cache when state value change
  );

  useEffect(() => {
    console.log(myObj.a); // 1) run   7) run w/ new value 
  }, [myObj]); // 2) when object changes

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
