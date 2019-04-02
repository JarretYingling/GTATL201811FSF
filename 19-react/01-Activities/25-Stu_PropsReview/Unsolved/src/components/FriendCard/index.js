import React from "react";
import "./style.css";

const FriendCard = props => {
  
  const {key, name, image, occupation, location} = props;
  
  return(
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Occupation:</strong> {occupation}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FriendCard;
