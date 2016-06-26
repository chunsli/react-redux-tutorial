import React from 'react';
import FilterLink from './FilterLink';

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
    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );
    return (
      <div>
        <input ref={node => {
					this.input = node;
				}} />
        <button onClick = { () => {
					store.dispatch({
						type: 'ADD_TODO',
						text: this.input.value
					});
					this.input.value = '';
				}}>
          Add Todo
        </button>
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id}
                onClick={ () => {
									store.dispatch({
										type:'TOGGLE_TODO',
										id:todo.id
									})
							}}
                style={{
								textDecoration:
								todo.completed ?
									'line-through' :
									'none'
						}}>
              {todo.text}
            </li>
          )}
        </ul>
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

