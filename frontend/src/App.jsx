import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import {useState, useEffect } from 'react'

import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, setFavouritePhotos, setModalPhoto, closeModalPhoto, fetchPhotosByTopic   } = useApplicationData();
  
  const [darkMode, setDarkMode] = useState(false);

  
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };


  
  return (
    <div className={`App${darkMode ? 'dark-mode' : ''}`}>
      
      <HomeRoute 
        topics={state.topicData} 
        photos={state.photoData} 
        favouritePhotos={state.favouritePhotos} 
        setFavouritePhotos={setFavouritePhotos}
        setModalPhoto={setModalPhoto}
        modalPhoto={state.modalPhoto}
        fetchPhotosByTopic={fetchPhotosByTopic}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      {state.modalPhoto && <PhotoDetailsModal 
        modalPhoto={state.modalPhoto} 
        closeModalPhoto={closeModalPhoto} 
        favouritePhotos={state.favouritePhotos} 
        setFavouritePhotos={setFavouritePhotos} 
        topics={state.topicData} 
        similarPhotos={state.modalPhoto.similar_photos}
        photos={state.photoData} 
        setModalPhoto={setModalPhoto}
        darkMode={darkMode}
        setdarkMode={setDarkMode}
        toggleDarkMode={toggleDarkMode}
      />}
    </div>
    
  );
};

export default App;
