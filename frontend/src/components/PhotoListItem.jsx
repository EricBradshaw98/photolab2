import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  return (
    <section className="photo-list__item">
      <img className="photo-list__image" src={props.photo.imageSource} alt="Photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.profile} alt="Profile" />
        <h1 className="photo-list__user-info">{props.photo.username}</h1>
        <h2 className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</h2>
      </div>
    </section>
  )
};

export default PhotoListItem;
