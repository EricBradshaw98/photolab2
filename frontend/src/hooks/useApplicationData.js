import { useReducer, useEffect, useState } from "react";

const initialState = {
  favouritePhotos: [],
  modalPhoto: null,
  photoData: [],
  topicData: [],
  darkMode: false
};

const ACTIONS = {
  SET_FAVOURITE_PHOTOS: "SET_FAVOURITE_PHOTOS",
  SET_MODAL_PHOTO: "SET_MODAL_PHOTO",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  CLOSE_MODAL_PHOTO: "CLOSE_MODAL_PHOTO",
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE"

};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FAVOURITE_PHOTOS:
      return { ...state, favouritePhotos: action.payload };
    case ACTIONS.SET_MODAL_PHOTO:
      return { ...state, modalPhoto: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.CLOSE_MODAL_PHOTO:
      return { ...state, modalPhoto: null };
    case ACTIONS.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos by topic:", error);
      });
  };

  const setFavouritePhotos = (photos) => {
    dispatch({ type: ACTIONS.SET_FAVOURITE_PHOTOS, payload: photos });
  };

  const setModalPhoto = (photo) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: photo });
  };

  const setTopic = (topic) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topic });
  };

  const closeModalPhoto = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL_PHOTO });
  };

  const toggleDarkMode = () => {
    // Action creator for toggling dark mode
    dispatch({ type: ACTIONS.TOGGLE_DARK_MODE });
  };

  return {
    state,
    setFavouritePhotos,
    setModalPhoto,
    closeModalPhoto,
    fetchPhotosByTopic,
    setTopic,
    darkMode,
    setDarkMode,
    toggleDarkMode
  };
};

export default useApplicationData;
