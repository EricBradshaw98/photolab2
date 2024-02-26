import React from 'react';
import PhotoList from '../components/PhotoList';

import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {closeModalPhoto, modalPhoto} = props

  console.log(modalPhoto.similar_photos);




  return (
    <div className={`photo-details-modal${props.darkMode ? 'dark-mode' : ''}`}>
      
      <button onClick={closeModalPhoto} className={`photo-details-modal__close-button${props.darkMode ? 'dark-mode' : ''}`}>
        <img  src={closeSymbol} alt="close symbol" />
        
      </button>

      <section >
      <div className="photo-details-modal__image-container">
  <div className="photo-details-modal__button"><PhotoFavButton  favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} id={modalPhoto.id}  /></div>
  <img className="photo-details-modal__image" src={modalPhoto.urls.regular} alt="Photo" />
  <hr className='photo-details-modal__hrr'></hr>
</div>
      <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={modalPhoto.user.profile} alt="Profile" />
        <div className="locationandinfos">
        <h1 className="photo-details-modal__photographer-info">{modalPhoto.user.name}</h1>
        <h2 className="photo-details-modal__photographer-location">{`${modalPhoto.location.city}, ${modalPhoto.location.country}`}</h2>
        </div>
      </div>
    </section>
    <hr className='photo-details-modal__hrr'></hr>
    <h1 className='photo-details-modal__title'>Related Photos </h1>
<div className= "photo-details-modal__images">
    <PhotoList  favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} setModalPhoto={props.setModalPhoto} photos={Object.values(modalPhoto.similar_photos)} modalPhoto={modalPhoto} />

    </div>
    </div>
  );
};

export default PhotoDetailsModal;

//<img  className="photo-list__image" src={props.photos.urls.regular} alt="Photo" />