import React from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from '../contexts/todos.context';

function TodoApp() {
  return (
    <TodosProvider>
      <TodoForm />
      <TodoList />
    </TodosProvider>
  );
}

export default TodoApp;
