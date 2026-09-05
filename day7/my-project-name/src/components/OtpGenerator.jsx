import React, { useState } from 'react'
 import  './OtpGenerator.css'
import {useEffect} from 'react'






const OtpGenerator = () => {
    const [otp , setOTP] = useState( );
    const [timer, setTimer] = useState(5);


useEffect(()=>{
  let interval;
  if(timer>0){
     interval = setInterval(()=>{
      setTimer(prev =>prev-1);
    },1000);
  }
  else if (timer === 0) {
            setOTP(null); // Timer 0 hone par OTP screen se hata dein
           }

       return () => clearInterval(interval);
},[timer,otp]);
 




    function handleClick(){
   setOTP(Math.floor(100000 + Math.random()*900000));
 setTimer(5);

};

 
  return (
    <div className='container'>
      <h1>OTP GENERATOR</h1>
{otp && (<><h2>{otp}</h2> <p>Valid for {timer} seconds</p></>) }
{ timer=== 0 && <h2>OTP expired!</h2>}
 
   {!otp &&  <h2>Click 'generate OTP' to get a code.</h2>}
       <button onClick={handleClick} style={{width:"120px",height:"40px" , fontSize:"14px",backgroundColor:"#FF0032",color:"white",border:"none",borderRadius:"25px"}}
       >Generate OTP</button>

    </div>
  )
}

export default OtpGenerator
