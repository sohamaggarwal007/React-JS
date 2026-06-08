import React, { useContext } from 'react'
import { themeContext, UserContext } from '../App' 

const ChildC = () => {
    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(themeContext);

    function handleClick() {
        if(theme==='light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

  return (
    <div>
        <button onClick={handleClick}>
            Change Theme
        </button>
        <br/>
        Data: {user.name}
    </div>
  )
}

export default ChildC