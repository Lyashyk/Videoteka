import React, { Component } from 'react';
import cn from 'classnames';

import './dialog-window.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as selectors from '../../duck/selectors';
import * as actions from '../../duck/actions';

import ButtonIcon from '../button-icon/button-icon';
import IconCross from '../icons/iconCross/icon-cross';

const mapStateToProps = state => {
  return {
    isOpen: selectors.getIsOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  const { changeIsOpen, clearNewItem } = bindActionCreators(actions, dispatch);
  return {
    changeIsOpen,
    clearNewItem
  };
};

class DialogWindow extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <div
        className={cn('DialogWindow', {
          'DialogWindow--visible': isOpen
        })}
      >
        <div className="DialogWindow-container" ref={this.setContainerRef}>
          <div className="DialogWindow-content">
            {this.props.children}

            <div className="DialogWindow-iconButtom">
              <ButtonIcon
                icon={<IconCross />}
                onClick={this.changeDialogWindowFunction}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  setContainerRef = element => {
    this.container = element;
  };

  handleWindowClick = e => {
    const { target } = e;

    if (target === this.container) {
      this.changeDialogWindowFunction();
    }
  };

  changeDialogWindowFunction = () => {
    const { changeIsOpen, clearNewItem } = this.props;
    clearNewItem();
    changeIsOpen();
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogWindow);
