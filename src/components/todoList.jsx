import React from 'react';
import Todo from './todo';

function TodoList(props) {
  const { todos } = props;
  return (
    <div className="todo">
      <input type="text" placeholder="Add todo" />
      <ul className="todo__list">
        {todos && todos.map((t) => (
          <li key={t.id} className="todo__item">
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
