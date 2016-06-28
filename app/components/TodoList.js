import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo, getVisibleTodos } from '../actions';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
};

const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) =>
      dispatch(toggleTodo(id))
  }
};

export default connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);
