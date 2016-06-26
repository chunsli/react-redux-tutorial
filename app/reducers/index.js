import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibtilityFilter';

export default combineReducers({
  todos,
  visibilityFilter
});

