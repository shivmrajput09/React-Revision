import { useState } from 'react'
 import './App.css'
import Onchangecolor from './Onchangecolor';



function App() {
  const [count, setCount] = useState(0);
const [bgcolor , setBgColor] = useState('#FFFFFF');


  function handleClick(e){
    setCount(count+1);
  }



  return (
   <div  onClick={handleClick} className='appp' style={{backgroundColor:bgcolor}}> 


    <h1> count :{count}</h1>
     <Onchangecolor  bgcolor={bgcolor} setBgColor={setBgColor} />

     </div>
  )
}

export default App
