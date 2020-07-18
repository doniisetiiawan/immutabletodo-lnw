// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Todo from './todo';

function TodoListqxm(props) {
  const { todos, toggleTodo, addTodo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = event.which == 13;
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = (id) => () => toggleTodo(id);

  return (
    <div className="todo">
      <input
        type="text"
        placeholder="Add todo"
        onKeyDown={onSubmit}
      />
      <ul className="todo__list">
        {todos
          && todos.map((t) => (
            <li
              key={t.get('id')}
              className="todo__item"
              onClick={toggleClick(t.get('id'))}
            >
              <Todo todo={t.toJS()} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoListqxm;
