import React, { useContext } from 'react';

import Todo from './Todo';
import { TodosContext } from '../contexts/todos.context';

function TodoList() {
  const todos = useContext(TodosContext);

  return (
    <ul style={{ paddingLeft: 10, width: '95%' }}>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
