
import { useState, useReducer } from "react";

const initialState = {
  favouritePhotos: [],
  modalPhoto: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVOURITE_PHOTOS":
      return { ...state, favouritePhotos: action.payload };
    case "SET_MODAL_PHOTO":
      return { ...state, modalPhoto: action.payload };
    case "CLOSE_MODAL_PHOTO":
      return { ...state, modalPhoto: null };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setFavouritePhotos = (photos) => {
    dispatch({ type: "SET_FAVOURITE_PHOTOS", payload: photos });
  };

  const setModalPhoto = (photo) => {
    dispatch({ type: "SET_MODAL_PHOTO", payload: photo });
  };

  const closeModalPhoto = () => {
    dispatch({ type: "CLOSE_MODAL_PHOTO" });
  };

  return {
    state,
    setFavouritePhotos,
    setModalPhoto,
    closeModalPhoto
  };
};

export default useApplicationData;
