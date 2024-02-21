import React from 'react';
import topics from './mocks/topics';
import photos from './mocks/photos';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import { useState, useReducer } from "react";
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  
const [favouritePhotos, setFavouritePhotos] = useState([])



  


  const [totalLikes, dispatch] = useReducer((totalLikes, amount) => {
    
    if (totalLikes) {
      return (totalLikes + amount);
    }
  
    
  }, 0);
   

  
  return (
    <div className="App">
      
      == {favouritePhotos.length}
      <HomeRoute topics={topics} photos={photos} favouritePhotos={favouritePhotos} setFavouritePhotos={setFavouritePhotos} />
        
      
    </div>
  );
};

export default App;
