    import './App.css'
import Statelifting from './components/Statelifting'
import { useState } from 'react'

function App() {
  //create state
  //manage state
  //change state
  //sbhi child me state ko sync karwadunga

  const[name,setName] = useState('');
 
  return (
    <div className="App">
<Statelifting  name ={name} setName={setName}/>
<p>i m inside parent component and name is <b>{name}</b></p>
    </div>
  )
}

export default App
