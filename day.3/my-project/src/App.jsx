 import React from 'react'
 import { useState } from 'react';
 import LoginButton from './components/loginButton';
 import LogoutButton from './components/logoutButton';

 
 const App = () => {
const [toggle , setToggle] = useState(false);

   return (
  
     <div>
      <button onClick={()=>setToggle(!toggle)}>switch</button>
       
{toggle ? <LoginButton/> : <LogoutButton/>}

     </div>
   )
 }
 
 export default App
 