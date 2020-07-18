/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import TodoList from './components/todoList';
import './index.css';

const todos = [
  { id: 0, isDone: true, text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'TDD implement reducers' },
  { id: 3, isDone: false, text: 'connect components' },
];

ReactDOM.render(
  <React.StrictMode>
    <TodoList todos={todos} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
