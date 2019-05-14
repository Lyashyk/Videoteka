import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../duck/selectors';
import * as actions from '../duck/actions';

import Select from '../components/select/select';

const mapStateToProps = state => {
  return {
    term: selectors.getNewElementFormat(state)
  };
};

const mapDispatchToProps = dispatch => {
  const { changeNewElementFormat } = bindActionCreators(actions, dispatch);
  return {
    changeNewElementFormat
  };
};

class SelectFormatContainer extends Component {
  render() {
    const optionArr = ['VHS', 'DVD', 'Blu-Ray', 'Mp4'];
    const options = optionArr.map(item => {
      return <option>{item}</option>;
    });
    const { term } = this.props;
    return (
      <Select
        term={term}
        onChangeFunction={this.handleFilterFunction}
        options={options}
      />
    );
  }

  handleFilterFunction = e => {
    const { changeNewElementFormat, term } = this.props;
    changeNewElementFormat(e.target.value);
    console.log(term);
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFormatContainer);
