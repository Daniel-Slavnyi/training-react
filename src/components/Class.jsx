import { Component } from 'react';
import Controls from './Training/Controls';

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
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
