import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../duck/selectors';
import * as actions from '../duck/actions';

import FilmCard from '../components/film-card/film-card';

const mapStateToProps = (state, props) => {
  return {
    movie: selectors.getMovie(state, props.id)
  };
};

const mapDispatchToProps = dispach => {
  const { deleteMovie, filterMovieList } = bindActionCreators(actions, dispach);
  return {
    deleteMovie,
    filterMovieList
  };
};

class FilmCardContainer extends Component {
  render() {
    const { movie, ...rest } = this.props;
    const validTitle = this.validTitle(movie.title);

    return (
      <FilmCard
        {...rest}
        id={movie.id}
        name={validTitle}
        onMovieDelete={this.handleMovieDelete}
      />
    );
  }

  validTitle = str => {
    if (str.length > 12) {
      let validStr = str.substring(0, 12);
      validStr = validStr + '...';
      return validStr;
    }
    return str;
  };

  handleMovieDelete = id => () => {
    const { deleteMovie, filterMovieList } = this.props;

    deleteMovie(id);
    filterMovieList();
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmCardContainer);
