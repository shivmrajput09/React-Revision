import React from 'react'
 import './Counter.css'
import { useState } from 'react'

const Counter = () => {
      const [count,setCount] = useState(0);

  return (
    <div className='counter'>
 <h1>you clicked {count} times </h1>
 <button className='button' onClick={()=>setCount(count+1)}>Click</button>
<button className='button' onClick={()=>setCount(0)}>Reset</button>


    </div>
  )
}

export default Counter
