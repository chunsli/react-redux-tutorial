import React from 'react';

class FilterLink extends React.Component {
  render() {
    const {
      store,
      filter,
      currentFilter,
      children
    } = this.props;

    if (filter === currentFilter) {
      return <span>{children}</span>
    }
    return (
      <a href='#'
         onClick={e => {
				e.preventDefault();
				store.dispatch({
					type: 'SET_VISIBILITY_FILTER',
					filter
				});
			}}
      >
        {children}
      </a>
    )
  }
}

export default FilterLink;