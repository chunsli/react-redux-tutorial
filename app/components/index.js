import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

export default class TodoApp extends React.Component {

  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    )
  }
};

