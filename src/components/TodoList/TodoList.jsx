import React from 'react';

export default function TodoList({ todos, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <p>TechSkill {text}</p>
            <button
              tupe="button"
              onClick={() => {
                deleteTodo(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
