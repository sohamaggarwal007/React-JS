import { useEffect, useState } from 'react'

function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Count Changed: ", count);
  }, [count]);
  
  useEffect(() => {
    const IntervalId = setInterval(() => {
        console.log("Set Interval Added");
        setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
        console.log("Set Interval Ended");
        clearInterval(IntervalId);
    }
  }, []);

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>
            Increment Count
        </button>
        <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default MultiEffectComponent