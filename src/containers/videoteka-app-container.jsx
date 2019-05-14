import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as selectors from '../duck/selectors';

import '../components/film-card-list/film-card-list.css';

import FilmCardListContainer from '../containers/film-card-list-container';
import Page from '../components/page/page';
import Container from '../components/container/container';
import InfoMoviePage from '../components/info-movie-page/info-movie-page';

const mapStateToProps = state => {
  return {
    movie: selectors.getfilterMovies(state)
  };
};

class VideotekaAppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Page addNewElement={this.addNewElement}>
            <Route
              path="/"
              exact
              render={() => {
                return <FilmCardListContainer />;
              }}
            />
            <Route
              path="/movie/:id"
              exact
              render={({ match }) => {
                const { id } = match.params;
                const item = this.props.movie[id];
                return (
                  <InfoMoviePage
                    title={item.title}
                    releaseYear={item.releaseYear}
                    format={item.format}
                    stars={item.stars}
                  />
                );
              }}
            />
          </Page>
        </Container>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps)(VideotekaAppContainer);
