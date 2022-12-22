import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CicleOfLife extends Component {
  state = {
    activeElement: 'id',
  };

  onClickChange = event => {};

  componentDidMount() {
    console.log('im component did mount');
  }

  render() {
    return (
      <div>
        <ul></ul>
      </div>
    );
  }
}

export default CicleOfLife;
