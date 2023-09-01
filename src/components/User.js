import React, { useState } from 'react';

function User(props) {
  const { 
    email, 
    gender,
    cell, 
    picture: { medium }, 
    name: { first, last },  
    dob: { age }, 
    location: { state, country }
  } = props.person;

  const [isHidden, setHidden] = useState(true);

  const handleDetails = () => {
    setHidden(!isHidden)
    console.log('clicked')
  }

  return (
    <li key={email}>
      <img src={medium} alt={first} />
      <h3>{first} {last}</h3>
      <button className="detailsBtn" onClick={() => handleDetails()}>{isHidden ? "Show Details" : "Hide Details"}</button>
      {
        !isHidden && 
        <div>
          <i class="fas fa-user"></i> {gender}, {age}<br/>
          <i class="fas fa-map-pin"></i> {state}, {country}<br/>
          <i class="fas fa-envelope"></i> {email}<br/>
          <i class="fas fa-phone-alt"></i> {cell}
        </div>
      }
    </li>
  )
}

export default User;