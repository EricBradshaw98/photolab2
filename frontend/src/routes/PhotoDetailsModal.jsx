import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {closeModalPhoto, modalPhoto} = props

  return (
    <div className="photo-details-modal">
      
      <button className="photo-details-modal__close-button">
        <img onClick={closeModalPhoto} src={closeSymbol} alt="close symbol" />
        
      </button>

      <h1>{modalPhoto.id}</h1>
      <img  className="photo-list__image" src={modalPhoto.urls.regular} alt="Photo" />
    </div>
  );
};

export default PhotoDetailsModal;

//<img  className="photo-list__image" src={props.photos.urls.regular} alt="Photo" />