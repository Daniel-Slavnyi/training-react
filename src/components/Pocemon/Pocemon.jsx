import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Pocemon extends Component {
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return <div>Pocemon</div>;
  }
}
