import React, { useState } from 'react'

const Onchangecolor = ({bgcolor,setBgColor}) => {

function handleColor(e){
  e.stopPropagation();
setBgColor(e.target.value);
 }



  return (
    <div style={{backgroundColor:bgcolor}}>
      
      <input type='color'  value={bgcolor} onChange={handleColor}></input>
      {/* <button onClick={handleColor}>change color</button> */}

    </div>
  )
}

export default Onchangecolor
