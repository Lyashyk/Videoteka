import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../duck/selectors';
import * as actions from '../duck/actions';

import Input from '../components/input/input';

const mapStateToProps = state => {
  return {
    term: selectors.getNewElementStars(state)
  };
};

const mapDispatchToProps = dispatch => {
  const { changeNewElementStars } = bindActionCreators(actions, dispatch);
  return {
    changeNewElementStars
  };
};

class InputStarsContainer extends Component {
  render() {
    const { term } = this.props;
    return (
      <Input
        term={term}
        placeholder="Stars list"
        onChangeFunction={this.handleFilterFunction}
      />
    );
  }

  handleFilterFunction = e => {
    const { changeNewElementStars, term } = this.props;

    changeNewElementStars(e.target.value);
    console.log(term);
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputStarsContainer);
