import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Logout from './components/Logout'

function App() {

  const [isLoggedIn] = useState(true);

  if(!isLoggedIn) {
    return (
      <Login/>
    )
  }

  return (
    <div>
      <h1>Welcome everyone to my Web Dev Journey</h1>
      <div>
        {isLoggedIn && <Logout/>} {/* Logical AND used */}
      </div>
    </div>
  )

  // Ternary Operators
  // return (
  //   <div>
  //     {isLoggedIn ? <Logout/> : <Login/>}
  //   </div>
  // )

  // Simple If-Else Statement
  // if(isLoggedIn) {
  //   return (
  //     <Logout/>
  //   )
  // }
  // else {
  //   return (
  //     <Login/>
  //   )
  // }

}

export default App
