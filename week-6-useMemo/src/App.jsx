import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  // const [sum, setSum] = useState(0);  approach 1
  const [input, setInput] = useState(1);

  const [count, setCount] = useState(0);

  // approach 2
  // useEffect(() => {
  //   let total = 0;
  //   for (let i = 1; i <= parseInt(input); ++i) {
  //     total += i;
  //   }
  //   setSum(total);
  // }, [input])

  // approach 2
  let sum = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= input; ++i) {
      finalCount += i;
    }
    return finalCount;
  }, [input]);


  return (
    <div>
      <input type='text' onChange={(e) => {setInput(e.target.value)}} value={input} />
      <br></br>
      {sum}
      <br></br>
      <button onClick={() => setCount(count+1)}> count {count} </button>
    </div>
  )
}

export default App
