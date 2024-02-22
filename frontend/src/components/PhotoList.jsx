import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";




const PhotoList = (props) => {
  const photoItems = props.photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photo={photo}
      favouritePhotos={props.favouritePhotos} 
      setFavouritePhotos={props.setFavouritePhotos}
      setModalPhoto={props.setModalPhoto}
      similarPhotos={props.similarPhotos}
      
    />
  ));

  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};


export default PhotoList;

