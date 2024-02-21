import React from "react";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
import FavIcon from './FavIcon';
import "../styles/TopicList.scss";


const PhotoListItem = (props) => {

console.log(props)

  return (
    <section className="photo-list__item">
      <PhotoFavButton favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} id={props.photo.id} className="photo-list__fav-icon"  />
      <img onClick={props.setModal} className="photo-list__image" src={props.photo.urls.regular} alt="Photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} alt="Profile" />
        <h1 className="photo-list__user-info">{props.photo.user.name}</h1>
        <h2 className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</h2>
        
      </div>
    </section>
  )
};

export default PhotoListItem;
