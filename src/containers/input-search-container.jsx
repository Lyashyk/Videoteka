import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../duck/selectors';
import * as actions from '../duck/actions';

import Input from '../components/input/input';

const mapStateToProps = state => {
  return {
    term: selectors.getTerm(state)
  };
};

const mapDispatchToProps = dispatch => {
  const { filterMovieList, changeTerm } = bindActionCreators(actions, dispatch);
  return {
    filterMovieList,
    changeTerm
  };
};

class InputSearchContainer extends Component {
  render() {
    const { term } = this.props;
    return (
      <Input
        term={term}
        placeholder="Type movie or actor"
        onChangeFunction={this.handleFilterFunction}
      />
    );
  }

  handleFilterFunction = e => {
    const { filterMovieList, changeTerm } = this.props;

    changeTerm(e.target.value);
    filterMovieList();
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSearchContainer);
