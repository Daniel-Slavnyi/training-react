import { Component } from 'react';
import css from './Dropdown.module.css';

export default class Dropdown extends Component {
  state = {
    visible: false,
  };

  togle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className="dropdown">
        <div className={css.wrapper}>
          <button className={css.button} type="botton" onClick={this.togle}>
            {this.state.visible ? 'Hide' : 'show'}
          </button>
          {/* <button className={css.button} type="botton" onClick={this.hide}>
            Hide
          </button> */}
        </div>
        {this.state.visible && <div className={css.menu}>Menu</div>}
      </div>
    );
  }
}
