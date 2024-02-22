import React from 'react';
import PhotoList from '../components/PhotoList';
import SimilarPhotoList from '../components/SimilarPhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {closeModalPhoto, modalPhoto} = props

  console.log(modalPhoto.similar_photos);




  return (
    <div className="photo-details-modal">
      
      <button onClick={closeModalPhoto} className="photo-details-modal__close-button">
        <img  src={closeSymbol} alt="close symbol" />
        
      </button>

      <section >
      <div className="photo-details-modal__image-container">
  <PhotoFavButton favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} id={modalPhoto.id} className="photo-details__fav-icon" />
  <img className="photo-details-modal__image" src={modalPhoto.urls.regular} alt="Photo" />
</div>
      <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={modalPhoto.user.profile} alt="Profile" />
        <div className="locationandinfos">
        <h1 className="photo-details-modal__photographer-info">{modalPhoto.user.name}</h1>
        <h2 className="photo-details-modal__photographer-location">{`${modalPhoto.location.city}, ${modalPhoto.location.country}`}</h2>
        </div>
      </div>
    </section>
    <hr className='photo-details-modal__hr'></hr>
<div className= "photo-details-modal__images">Related Photos 
    <SimilarPhotoList photos={props.photos} favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} setModalPhoto={props.setModalPhoto} similarPhotos={modalPhoto.similar_photos} modalPhoto={modalPhoto} />

    </div>
    </div>
  );
};

export default PhotoDetailsModal;

//<img  className="photo-list__image" src={props.photos.urls.regular} alt="Photo" />