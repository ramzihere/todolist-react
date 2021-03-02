import React from 'react';

import TodoApp from './components/TodoApp';

import useStyles from './styles/AppStyles';

function App() {
  const classes = useStyles();

  return (
    <div>
      <header className={classes.header}>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>A simple todolist app built with React Hooks & Context</h2>
      </header>
      <TodoApp />
      <a
        href="https://github.com/ramzihere/todolist-react.git"
        className={classes.link}
      >
        <strong>View source on GitHub &copy; M.Ramzan</strong>
      </a>
    </div>
  );
}

export default App;
