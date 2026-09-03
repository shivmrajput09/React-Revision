 import React from 'react'
import './Eventss.css'

 
 const Eventss = () => {

function showAlert(message){
  alert(message);
}

   return (
     <div>
         <button className='button' onClick={(e)=>{
          showAlert("playing")
         }} >
               play 
              </button>
       
              <button className='button' onClick={(e) => {
                showAlert("uploading")
              }} >uploading</button>
     </div>
   )
 }
 
 export default Eventss
 