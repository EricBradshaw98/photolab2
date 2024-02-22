import React from 'react';
import topics from './mocks/topics';
import photos from './mocks/photos';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import { useState, useReducer } from "react";
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  
const [favouritePhotos, setFavouritePhotos] = useState([])
const [modalPhoto, setModalPhoto] = useState(null);


const closeModalPhoto = () => {
  setModalPhoto(null);
};
  
  return (
    <div className="App">
      
      
      <HomeRoute 
      topics={topics} 
      photos={photos} 
      favouritePhotos={favouritePhotos} 
      setFavouritePhotos={setFavouritePhotos}
      setModalPhoto={setModalPhoto}
      
       />
        
        
      {modalPhoto && <PhotoDetailsModal modalPhoto={modalPhoto} closeModalPhoto={closeModalPhoto} favouritePhotos={favouritePhotos} setFavouritePhotos={setFavouritePhotos}/>}
      
      
      
      
    </div>
  );
};

export default App;
