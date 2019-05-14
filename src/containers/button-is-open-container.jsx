import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../duck/actions';

import Button from '../components/button/button';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  const { changeIsOpen } = bindActionCreators(actions, dispatch);
  return {
    changeIsOpen
  };
};

class ButtonIsOpenContainer extends Component {
  render() {
    const { ...rest } = this.props;
    return <Button handleClick={this.changeIsOpen} {...rest} />;
  }

  changeIsOpen = () => {
    const { changeIsOpen } = this.props;
    changeIsOpen();
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonIsOpenContainer);
