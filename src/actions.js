import { v4 as uuidv4 } from 'uuid';

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uuidv4(),
      isDone: false,
      text,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
}
