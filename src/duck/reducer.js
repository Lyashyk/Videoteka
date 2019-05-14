import * as types from './types';
import State from './seeds';

const reducer = (state = State, action) => {
  const {
    movies,
    term,
    isOpen,
    newElementTitle,
    newElementReleaseYear,
    newElementFormat,
    newElementStars
  } = state;
  switch (action.type) {
    case types.DELETE_MOVIE:
      const updatedMovies = [
        ...movies.filter(movie => movie.id !== parseInt(action.payload.id, 10))
      ];

      return { ...state, movies: updatedMovies };

    case types.FILTER_FILM_LIST:
      const updatedFilterMovies = movies.filter(item => {
        if (term === 0) return item;
        return (
          item.title.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
          item.stars.toLowerCase().indexOf(term.toLowerCase()) > -1
        );
      });
      return { ...state, filterMovies: updatedFilterMovies };

    case types.CHANGE_TERM:
      return { ...state, term: action.payload.value };

    case types.CHANGE_IS_OPEN:
      const updatedIsOpen = !isOpen;
      return { ...state, isOpen: updatedIsOpen };

    case types.CHANGE_NEW_ELEMENT_TITLE:
      const value = action.payload.value;
      return { ...state, newElementTitle: value };

    case types.CHANGE_NEW_ELEMENT_RELEASE_YEAR:
      const valueReleaseYear = action.payload.value;
      return { ...state, newElementReleaseYear: valueReleaseYear };

    case types.CHANGE_NEW_ELEMENT_FORMAT:
      const valueFormat = action.payload.value;
      return { ...state, newElementFormat: valueFormat };

    case types.CHANGE_NEW_ELEMENT_STARS:
      const valueStars = action.payload.value;
      return { ...state, newElementStars: valueStars };

    case types.CLEAR_NEW_ITEM:
      return {
        ...state,
        newElementTitle: '',
        newElementReleaseYear: '',
        newElementFormat: 'DVD',
        newElementStars: ''
      };

    case types.ADD_NEW_ITEM:
      const newItemCopy = {
        id: movies.length,
        title: newElementTitle,
        releaseYear: newElementReleaseYear,
        format: newElementFormat,
        stars: newElementStars
      };
      const updateMoviesArr = [...movies, newItemCopy];
      console.log('updateMoviesArr', updateMoviesArr);
      return { ...state, movies: updateMoviesArr };

    case types.SORT:
      const movieArrCopy = [...movies];
      const sortMovie = movieArrCopy.sort((a, b) => {
        if (a.title > b.title) return 1;
        else return -1;
      });
      return { ...state, movies: sortMovie };

    default:
      return { ...state, movies: movies };
  }
};

export default reducer;
