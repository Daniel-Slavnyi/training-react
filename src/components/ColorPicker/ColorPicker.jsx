import { Component } from 'react';
import css from './ColorPicker.module.css';

export default class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  makeOptionClasses = index => {
    const buttonClasses = [css.button];

    if (index === this.state.activeOptionIdx) {
      buttonClasses.push(css.buttoActive);
    }

    return buttonClasses.join(' ');
  };

  makeActivButton = index => {
    this.setState({ activeOptionIdx: index });
  };

  render() {
    const { options } = this.props;
    const { label } = options[this.state.activeOptionIdx];

    return (
      <div>
        <h2>Color Picker</h2>
        <div className={css.wrapper}>
          <p>{label}</p>
          {options.map(({ label, color }, index) => (
            <button
              type="button"
              className={this.makeOptionClasses(index)}
              key={label}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                this.makeActivButton(index);
              }}
            >
              Click me
            </button>
          ))}
        </div>
      </div>
    );
  }
}
