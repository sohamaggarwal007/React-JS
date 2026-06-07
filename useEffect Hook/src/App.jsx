import './App.css'
import { useEffect, useState } from 'react';
import LoggerComponent from './components/Loggercomponent';
import TimerComponent from './components/TimerComponent';
import DataFetcher from './components/DataFetcher';
import ResizeComponent from './components/ResizeComponent';
import MultiEffectComponent from './components/MultiEffectComponent';

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(0);

 // first-> side effect function
 // second-> clean-up function
 // third-> comma separated dependence list

  // Variation 1 (runs on every render)
  // useEffect(() => {
  //   alert("I will run on each render.")
  // })

  // Variation 2 (runs on only first render)
  // useEffect(() => {
  //   alert("I will run on only first render")
  // }, [])

  // Variation 3 
  // Giving value 0 to count is also considered as a change so it renders at starting also.
  // useEffect(() => {
  //   alert("I will run every time when count is Updated")
  // }, [count])
  
  // Variation 4 (multiple dependencies)
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // }, [count, total])

  // Variation 5 (with a clean-up function)
  // useEffect(() => {
  //   alert("Count is Updated")
  
  //   return () => {
  //     alert("Count is unmounted from UI")
  //   }
  // }, [count])
  



  function handleClick() {
    setCount(count+1);
  }
  function handleCLickTotal() {
    setTotal(total+1);
  }


  return (
    <div>

      {/* <MultiEffectComponent/> */}

      <ResizeComponent/>

      {/* <DataFetcher/> */}

      {/* <TimerComponent/> */}

      {/* <LoggerComponent/> */}

      {/* <button onClick={handleClick}>
        Update Count
      </button>
      <br/>
      Count is: {count}
      <br/>

      <button onClick={handleCLickTotal}>
        Update Total
      </button>
      <br/>
      Total is: {total} */}
    </div>
    
  )
}

export default App
