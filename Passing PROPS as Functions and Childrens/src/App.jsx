import './App.css'
import Card from './components/card.jsx'
import Button from './components/Button.jsx'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>

      <Button incrementCount = {handleClick} text="click me">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="Soham Aggarwal">
        <h1>Best WEB DEV Course</h1>
        <p>Trying to be consistent</p>
        <p>Will complete the course soon...</p>
      </Card>

      <Card children="I am a children">
        <p>Kaise ho saare</p> This children overwrites the above children 
      </Card> */}

    </div>
  )
}

export default App
