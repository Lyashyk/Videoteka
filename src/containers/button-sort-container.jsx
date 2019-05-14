import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../duck/actions';

import Button from '../components/button/button.jsx';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  const { sort, filterMovieList } = bindActionCreators(actions, dispatch);
  return {
    sort,
    filterMovieList
  };
};

class ButtonSortContainer extends Component {
  render() {
    const { ...rest } = this.props;
    return <Button handleClick={this.changeIsOpen} {...rest} />;
  }

  changeIsOpen = () => {
    const { sort, filterMovieList } = this.props;
    sort();
    filterMovieList();
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonSortContainer);
