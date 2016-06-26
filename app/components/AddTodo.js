import React from 'react';

class FilterLink extends React.Component {
  render() {
    const {
      onAddClick
    } = this.props;
    
    let input;
    return (
      <div>
        <input ref={node => {
					input = node;
				}} />
        <button onClick = { () => {
					onAddClick(input.value);
					input.value = '';
				}}>
          Add Todo
        </button>
      </div>
    )
  }
}

export default FilterLink;