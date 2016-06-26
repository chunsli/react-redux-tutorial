import React from 'react';

class FilterLink extends React.Component {
  render() {
    const {
      filter,
      currentFilter,
      children,
      onClick
    } = this.props;

    if(filter === currentFilter){
      return <span>{children}</span>
    }
    return (
      <a href='#'
         onClick={e => {
				e.preventDefault();
				onClick(filter);
			}}
      >
        {children}
      </a>
    )
  }
}

export default FilterLink;