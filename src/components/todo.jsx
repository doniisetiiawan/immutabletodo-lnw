import PropTypes from 'prop-types';
import React from 'react';

function Todo(props) {
  const { todo } = props;

  if (todo.isDone) {
    return (
      <span style={{ textDecoration: 'line-through' }}>
        {todo.text}
      </span>
    );
  }
  return <span>{todo.text}</span>;
}

export default Todo;

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.any),
};

Todo.defaultProps = {
  todo: {},
};
