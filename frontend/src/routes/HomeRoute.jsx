import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} />
      
      <PhotoList photos={props.photos} favouritePhotos={props.favouritePhotos} setFavouritePhotos={props.setFavouritePhotos} />
    </div>
  );
};

export default HomeRoute;
