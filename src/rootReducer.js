import { combineReducers } from '@reduxjs/toolkit'
// import the reducer as todosReducer
import todosReducer from './components/Todos/todoSlice'

export default combineReducers({
  // other slices would be added here
  todos: todosReducer
});