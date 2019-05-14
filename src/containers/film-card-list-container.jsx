import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../duck/selectors';

import FilmCardList from '../components/film-card-list/film-card-list';

const mapStateToProps = state => {
  return {
    movieIdList: selectors.getMovieIdList(state)
  };
};

class FilmCardContainer extends Component {
  render() {
    const { movieIdList } = this.props;

    return <FilmCardList list={movieIdList} />;
  }
}

export default connect(mapStateToProps)(FilmCardContainer);
