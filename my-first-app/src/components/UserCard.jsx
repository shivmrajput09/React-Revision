import React from 'react'

import './UserCard.css'
 
function UserCard(props) {
  return (
    <div className="userCard" style={props.style}>
      <h1>{props.name}</h1>
      {/* Sirf /dog.avif likhna hai, koi import nahi chahiye */}
      <img src={props.image} width="250px" />
      <p>{props.name} is a domestic animal</p>
    </div>
  );
}

export default UserCard;