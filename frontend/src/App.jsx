import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';

import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, setFavouritePhotos, setModalPhoto, closeModalPhoto, setTopic   } = useApplicationData();
  console.log(setTopic);
  return (
    <div className="App">
      <HomeRoute 
        topics={state.topicData} 
        photos={state.photoData} 
        favouritePhotos={state.favouritePhotos} 
        setFavouritePhotos={setFavouritePhotos}
        setModalPhoto={setModalPhoto}
        modalPhoto={state.modalPhoto}
        setTopic={setTopic}
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
      />}
    </div>
  );
};

export default App;
