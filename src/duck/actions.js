import * as types from './types';

const deleteMovie = id => {
  return { type: types.DELETE_MOVIE, payload: { id } };
};

const filterMovieList = () => {
  return { type: types.FILTER_FILM_LIST };
};

const changeTerm = value => {
  return { type: types.CHANGE_TERM, payload: { value } };
};

const changeIsOpen = () => {
  return { type: types.CHANGE_IS_OPEN };
};

const changeNewElementTitle = value => {
  return { type: types.CHANGE_NEW_ELEMENT_TITLE, payload: { value } };
};

const changeNewElementReleaseYear = value => {
  return { type: types.CHANGE_NEW_ELEMENT_RELEASE_YEAR, payload: { value } };
};

const changeNewElementFormat = value => {
  return { type: types.CHANGE_NEW_ELEMENT_FORMAT, payload: { value } };
};

const changeNewElementStars = value => {
  return { type: types.CHANGE_NEW_ELEMENT_STARS, payload: { value } };
};

const clearNewItem = () => {
  return { type: types.CLEAR_NEW_ITEM };
};

const addNewElement = () => {
  return { type: types.ADD_NEW_ITEM };
};

const sort = () => {
  return { type: types.SORT };
};

export {
  deleteMovie,
  filterMovieList,
  changeTerm,
  changeIsOpen,
  changeNewElementTitle,
  changeNewElementReleaseYear,
  changeNewElementFormat,
  changeNewElementStars,
  clearNewItem,
  addNewElement,
  sort
};
