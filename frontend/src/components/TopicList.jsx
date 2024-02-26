import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";


const TopicList = (props) => {

  const topicItems = props.topics.map((topic) =>
  <TopicListItem
      key={topic.id}
      topic={topic}
      fetchPhotosByTopic={props.fetchPhotosByTopic}
      darkMode={props.darkMode}
      
    />


  )
  return (
    <div className={`top-nav-bar__topic-list${props.darkMode ? 'dark-mode-top-nav-bar' : ''}`}>
      {topicItems}
    </div>
  );
};

export default TopicList;
