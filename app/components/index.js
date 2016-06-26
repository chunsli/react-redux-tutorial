import React from 'react';

export default class TodoApp extends React.Component {
  render() {
    const props = this.props;
    const { store } = props;
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
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
};

