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
        {isLoggedIn && <Logout/>}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {isLoggedIn ? <Logout/> : <Login/>}
  //   </div>
  // )

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
