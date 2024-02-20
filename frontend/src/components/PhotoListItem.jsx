import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  return (
    <section>
      <img src={props.imageSource} alt="Photo" />
      <img src={props.profile} alt="Profile" />
       <h2>{`${props.location.city}, ${props.location.country}`}</h2>
  <h1>{props.username}</h1> <h1>{props.id}</h1>
  
  
 
  </section>
  )
};

export default PhotoListItem;
