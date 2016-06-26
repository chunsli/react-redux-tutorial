import React from 'react';
import FilterLink from './FilterLink';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

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
        <p>
          Show: {' '}
          <FilterLink
            store={store}
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          {' '}
          <FilterLink
            store={store}
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>
          {' '}
          <FilterLink
            store={store}
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }
};

