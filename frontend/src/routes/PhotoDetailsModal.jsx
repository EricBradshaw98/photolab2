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

      <section className="photo-list__item">
      <PhotoFavButton favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} id={modalPhoto.id} className="photo-list__fav-icon"  />
      <img className="photo-list__image" src={modalPhoto.urls.regular} alt="Photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={modalPhoto.user.profile} alt="Profile" />
        <h1 className="photo-list__user-info">{modalPhoto.user.name}</h1>
        <h2 className="photo-list__user-location">{`${modalPhoto.location.city}, ${modalPhoto.location.country}`}</h2>
        
      </div>
    </section>

    <SimilarPhotoList photos={props.photos} favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} setModalPhoto={props.setModalPhoto} similarPhotos={modalPhoto.similar_photos}  />

      
    </div>
  );
};

export default PhotoDetailsModal;

//<img  className="photo-list__image" src={props.photos.urls.regular} alt="Photo" />