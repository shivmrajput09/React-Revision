import React from 'react'
 import './Statelifiting.css'

const Statelifting = (props) => {
  return (
    <div className='child'>
        <input type="text" onChange={(e)=>props.setName(e.target.value)}/>
        <p>i m child component {props.name}</p>
      
    </div>
  )
}

export default Statelifting
