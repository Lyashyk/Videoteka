import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../duck/actions';

import Button from '../components/button/button.jsx';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  const {
    addNewElement,
    filterMovieList,
    changeIsOpen,
    clearNewItem
  } = bindActionCreators(actions, dispatch);
  return {
    addNewElement,
    filterMovieList,
    changeIsOpen,
    clearNewItem
  };
};

class ButtonAddNewMovieContainer extends Component {
  render() {
    const { ...rest } = this.props;
    return <Button handleClick={this.changeIsOpen} {...rest} />;
  }

  changeIsOpen = () => {
    const {
      addNewElement,
      filterMovieList,
      changeIsOpen,
      clearNewItem
    } = this.props;
    addNewElement();
    filterMovieList();
    clearNewItem();
    changeIsOpen();
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonAddNewMovieContainer);
