import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'


const TopNavigation = (props) => {

  const isFavPhotoExist = props.favouritePhotos.length > 0;

  return (
    <div className={`top-nav-bar${props.darkMode ? 'dark-mode-top-nav-bar' : ''}`}>
      
      <span  className={`top-nav-bar__logo${props.darkMode ? 'dark-mode-top-nav-bar__logo' : ''}`}>PhotoLabs<button onClick={() =>props.toggleDarkMode()} className="darkbutton">DarkMode</button></span>
      
      <TopicList topics={props.topics} fetchPhotosByTopic={props.fetchPhotosByTopic} toggleDarkMode={props.toggleDarkMode} darkMode={props.darkMode} />
      <FavBadge setFavouritePhotos={props.setFavouritePhotos}favouritePhotos={props.favouritePhotos} isFavPhotoExist={isFavPhotoExist} />

    </div>
  )
}

export default TopNavigation;