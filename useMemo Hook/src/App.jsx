import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleIncrement() {
    setCount(count+1);
  }

  function expensivetasks(num) {
    console.log("Inside Expensive Task");
    for(let i=0; i<=1000000000; i++) 
    return num*2;
  }

  let doubleVal = useMemo(() => expensivetasks(input), [input]);

  return (
    <div>
      <button onClick={handleIncrement}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <input type="number" placeholder='Enter Number' value={input} onChange={(e) => setInput(e.target.value)} />

      <div>
        Double: {doubleVal}
      </div>
    </div>
  )
}

export default App
