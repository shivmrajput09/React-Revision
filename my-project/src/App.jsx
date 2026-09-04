 import React from 'react'
import UsePractice from './components/UsePractice'
import {useState } from 'react';
  

 const App = () => {
const [count , setCount] = useState(0);

  function handleClick(){
setCount(count + 1);
  }
 
   return (
  
     <div>
      <button onClick={handleClick}>count</button>
      <h1>{count}</h1>
      <br/>
        <UsePractice count ={count} />
 
     </div>
   )
 }
 
 export default App
 