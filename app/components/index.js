import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

export default class TodoApp extends React.Component {

  render() {
    const getVisibleTodos = (
      todos,
      filter
    ) => {
      switch (filter) {
        case 'SHOW_ALL' :
          return todos;
        case 'SHOW_COMPLETED':
          return todos.filter(
            t => t.completed
          );
        case 'SHOW_ACTIVE':
          return todos.filter(
            t => !t.completed
          );
      }
    };
    const props = this.props;
    const { store, visibilityFilter, todos } = props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            store.dispatch({
              type: 'ADD_TODO',
              text
            })
          }
        />
        <TodoList
          todos={
            getVisibleTodos(
              todos,
              visibilityFilter
            )
          }
          onTodoClick={id=>
            store.dispatch({
              type:'TOGGLE_TODO',
              id
            })
          }
        />
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={filter => 
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            })
          }
        />
        
      </div>
    )
  }
};

