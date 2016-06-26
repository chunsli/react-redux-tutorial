const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id		: state.length > 0 ? state.slice(-1)[0].id + 1 : 0,
        text	: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      } else {
        return Object.assign(
          {},
          state,
          {completed: !state.completed}
        )
      }

    default:
      return state;
  }
};

export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(
        todo(state, action)
      );
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};
