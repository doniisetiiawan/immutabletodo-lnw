import React from 'react';

function Todo(props) {
  const { todo } = props;

  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  }
  return <span>{todo.text}</span>;
}

export default Todo;
