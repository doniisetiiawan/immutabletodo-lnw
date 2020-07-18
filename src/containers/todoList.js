import { connect } from 'react-redux';
import TodoListqxm from '../components/todoListqxm';
import { addTodo, toggleTodo } from '../actions';

const TodoList = connect(
  (state) => ({ todos: state }),
  (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  }),
)(TodoListqxm);

export default TodoList;
