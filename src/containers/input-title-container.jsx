import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../duck/selectors';
import * as actions from '../duck/actions';

import Input from '../components/input/input';

const mapStateToProps = state => {
  return {
    term: selectors.getNewElementTitle(state)
  };
};

const mapDispatchToProps = dispatch => {
  const { changeNewElementTitle } = bindActionCreators(actions, dispatch);
  return {
    changeNewElementTitle
  };
};

class InputTitleContainer extends Component {
  render() {
    const { term } = this.props;
    return (
      <Input
        term={term}
        placeholder="Movie title"
        onChangeFunction={this.handleFilterFunction}
      />
    );
  }

  handleFilterFunction = e => {
    const { changeNewElementTitle, term } = this.props;

    changeNewElementTitle(e.target.value);
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTitleContainer);
