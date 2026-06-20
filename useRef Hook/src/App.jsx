import { useRef, useState } from 'react'
import './App.css'
// import { useEffect } from 'react';

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0); // Value persist after every re-render

  // let btnRef = useRef();

  // function handleIncrement() {
  //   val.current = val.current + 1;
  //   console.log("Value of val: ", val.current);
  //   setCount(count+1);
  // }

  // function ChangeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }

  // useEffect(() => {
  //   console.log("Main fir se render ho gya hoon")
  // })

  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  
  
  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <button onClick={stopTimer}>
        Stop
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>

      {/* <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={ChangeColor}>
        Change color of the first button
      </button>
      Count: {count} */}
    </div>
  )
}

export default App
