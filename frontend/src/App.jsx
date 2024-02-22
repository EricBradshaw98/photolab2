import React from 'react';
import topics from './mocks/topics';
import photos from './mocks/photos';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import { useState, useReducer } from "react";
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, setFavouritePhotos, setModalPhoto, closeModalPhoto } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        favouritePhotos={state.favouritePhotos} 
        setFavouritePhotos={setFavouritePhotos}
        setModalPhoto={setModalPhoto}
        modalPhoto={state.modalPhoto}
      />
      
      {state.modalPhoto && <PhotoDetailsModal 
        modalPhoto={state.modalPhoto} 
        closeModalPhoto={closeModalPhoto} 
        favouritePhotos={state.favouritePhotos} 
        setFavouritePhotos={setFavouritePhotos} 
        topics={topics} 
        similarPhotos={state.modalPhoto.similar_photos}
        photos={photos} 
        setModalPhoto={setModalPhoto}
      />}
    </div>
  );
};

export default App;
