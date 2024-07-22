import React, { memo, useCallback, useState } from 'react'

export const Assignment4 = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount(count => count+1);
  }, []);

  const decrease = useCallback(() => {
    setCount(count => count-1);
  }, [])

  return (
    <div>
      {count}
      <br></br>
      <br></br>
      <CounterButton increase={increase} decrease={decrease} />
    </div>
  );
};


export const CounterButton = memo(({increase, decrease}) => {
  return (
    <>
      <button onClick={decrease}> Decrease </button>
      <button onClick={increase}> Increase </button>
    </>
  );
});
