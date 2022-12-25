import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';
import usersList from '../gallary.json';
import Counter from './Class';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList';
import CicleOfLife from './CicleOfLife/CicleOfLife';
import Modal from './Modal/Modal';
import Pocemon from './Pocemon/Pocemon';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#36f436' },
  { label: 'blue', color: '#5936f4' },
  { label: 'grey', color: '#a89391' },
  { label: 'pink', color: '#f436a5' },
  { label: 'indigo', color: '#3F51B5' },
];

export default class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'HTML/Css', completed: false },
      { id: 'id-2', text: 'JavaSkript', completed: false },
      { id: 'id-3', text: 'React', completed: false },
    ],
  };

  deleteTodo = toDoid => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => item.id !== toDoid),
    }));
  };

  render() {
    return (
      <div>
        <Modal />
        <Dropdown />

        <ColorPicker options={colorPickerOptions} />

        <User
          key={usersList[0].id}
          // url={usersList[0].url}
          // name={usersList[0].name}
          title={usersList[0].title}
          price={usersList[0].price}
        />

        <User
          key={usersList[1].id}
          url={usersList[1].url}
          name={usersList[1].name}
          title={usersList[1].title}
          price={usersList[1].price}
        />

        <User
          key={usersList[2].id}
          url={usersList[2].url}
          name={usersList[2].name}
          title={usersList[2].title}
          price={usersList[2].price}
        />

        <Counter initialValue={9} />

        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />

        <CicleOfLife />

        <Pocemon />
      </div>
    );
  }
}
