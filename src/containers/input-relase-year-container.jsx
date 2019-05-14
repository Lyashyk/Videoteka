import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../duck/selectors';
import * as actions from '../duck/actions';

import Input from '../components/input/input';

const mapStateToProps = state => {
  return {
    term: selectors.getNewElementReleaseYear(state)
  };
};

const mapDispatchToProps = dispatch => {
  const { changeNewElementReleaseYear } = bindActionCreators(actions, dispatch);
  return {
    changeNewElementReleaseYear
  };
};

class InputReleaseYearContainer extends Component {
  render() {
    const { term } = this.props;
    return (
      <Input
        term={term}
        placeholder="Release year"
        onChangeFunction={this.handleFilterFunction}
      />
    );
  }

  handleFilterFunction = e => {
    const { changeNewElementReleaseYear, term } = this.props;
    console.log(term);

    changeNewElementReleaseYear(e.target.value);
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputReleaseYearContainer);
