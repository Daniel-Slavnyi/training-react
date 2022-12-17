import { Component } from 'react';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = e => {
    this.setState(prev => {
      return {
        value: prev.value + 1,
      };
    });
  };
  handleDecrement = e => {
    this.setState(prev => {
      return {
        value: prev.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>

        <div>
          <button type="button" onClick={this.handleIncrement}>
            Plus 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Minus 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
