import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // create state
  // manage state
  // change state 
  // sync state
  const [name, setName] = useState('');

  return (
    <div>
      <Card title="Card 1" name={name} setName={setName} />
      <Card title="Card 2" name={name} setName={setName} />
      {/* <p>I am inside Parent component and value of name is {name}</p> */}
    </div>
  )
}

export default App
