import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <div className={css.backdrop}>
            <div className={css.modal}></div>
          </div>
        )}
        <button className={css.btn} onClick={this.togleModal}>
          {this.state.showModal ? 'Close' : 'Open'}
        </button>
      </>
    );
  }
}
