import React from 'react';
import topics from './mocks/topics';
import photos from './mocks/photos';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import { useState, useReducer } from "react";
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  
const [favouritePhotos, setFavouritePhotos] = useState([])
const [modal, setModal] = useState(false);


const toggleModal = () => {
  setModal(!modal);
};
  
  return (
    <div className="App">
      
      == {favouritePhotos.length}
      <HomeRoute 
      topics={topics} 
      photos={photos} 
      favouritePhotos={favouritePhotos} 
      setFavouritePhotos={setFavouritePhotos}
      setModal={setModal}
      modal={setModal}
       />
        
        {/* Conditionally render PhotoDetailsModal based on modal state */}
      {modal && <PhotoDetailsModal />}
      
      {/* Button to toggle modal state */}
      <button onClick={toggleModal}>Toggle Modal</button>
      
    </div>
  );
};

export default App;
