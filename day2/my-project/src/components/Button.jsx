import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
      {props.children}
   
      <button className="myButton" onClick={props.chalao}>
    {props.text}</button>
    </div>
  )
}

export default Button
