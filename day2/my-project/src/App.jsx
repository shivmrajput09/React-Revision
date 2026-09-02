 import './App.css'
import Button from './components/Button.jsx'
import {useState} from 'react'


 
function App() {
const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);

  } 
 
  return (
    <>
    <Button chalao={handleClick}
    text="click me" >
      <h1>Count: {count}</h1>
    </Button>
         


</>
   )
}

export default App
