const getMovie = (state, id) => {
  const movie = state.filterMovies[id];

  if (!movie) {
    return null;
  }

  return movie;
};

const getMovieIdList = state => {
  return Object.keys(state.filterMovies);
};

const getTerm = state => {
  return state.term;
};

const getfilterMovies = state => {
  return state.filterMovies;
};

const getIsOpen = state => {
  return state.isOpen;
};

const getNewElementTitle = state => {
  return state.newElementTitle;
};

const getNewElementReleaseYear = state => {
  return state.newElementReleaseYear;
};

const getNewElementFormat = state => {
  return state.newElementFormat;
};

const getNewElementStars = state => {
  return state.newElementStars;
};

export {
  getMovie,
  getMovieIdList,
  getTerm,
  getfilterMovies,
  getIsOpen,
  getNewElementTitle,
  getNewElementReleaseYear,
  getNewElementFormat,
  getNewElementStars
};
