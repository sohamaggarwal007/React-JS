// import { useCallback, useState } from 'react'
import './App.css'
// import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {

  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount(count+1);
  // }, [count]);

  return (
    <div>
      {/* <div>
        Count: {count}
      </div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>

      <div>
        <ChildComponent buttonName="Click Me" handleClick={handleClick} />
      </div> */}

      <div>
        <ExpensiveComponent />
      </div>
    </div>
  )
}

export default App
