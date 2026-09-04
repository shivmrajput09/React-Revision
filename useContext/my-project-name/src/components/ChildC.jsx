 import React from 'react'
 import { ThemeContext } from '../App'
 import {useContext} from 'react'
 
 
 const ChildC = () => {
    const { theme , setTheme } = useContext(ThemeContext);


    function handleClick(){
if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }    }

   return (
     <div>
        <button onClick={handleClick}>change theme</button>
      </div>
   )
 }
 
 export default ChildC
 