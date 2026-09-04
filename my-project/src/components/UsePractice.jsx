 import React from 'react'
 import {useEffect} from 'react'


 const UsePractice = ({count}) => {
     useEffect(()=>{
            console.log('ye mount hai phle chalega');

            return() =>{
            console.log("clean hai");
            };
        },[count]);
       
   return (
     <div>

       <p>componet render ho gya check console</p>
     </div>
   )
 }
 
 export default UsePractice
 