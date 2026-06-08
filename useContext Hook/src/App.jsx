import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

// Step 1: Create Context
// Step 2: Wrap all the childs inside a Provider
// Step 3: Pass Value
// Step 4: Consume the value

const UserContext = createContext();
const themeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"Soham"})
  const [theme, setTheme] = useState('light');

  return (
      <UserContext.Provider value={user}>
        <themeContext.Provider value={{theme, setTheme}}>
          <div id='container' style={{backgroundColor: theme==='light' ? "beige" : "saddlebrown"}}>
            <ChildA/>
          </div>
        </themeContext.Provider>
      </UserContext.Provider>
  )
}

export default App
export {UserContext, themeContext}