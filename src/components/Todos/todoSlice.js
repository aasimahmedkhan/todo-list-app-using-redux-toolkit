import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

const todosSlice = createSlice({
  // slice name
  name: 'todos',
  // initial state
  initialState: [],

  // object of reducer functions
  reducers: {
    // action
      add: {
      reducer(state, { payload }) {
        const { id, desc } = payload
        state.push({ id, desc, isComplete: false })
      },
      prepare(desc) {
        return {
          payload: {
            desc,
            id: nextTodoId++
          }
        }
      }
    },
  

    // action
    toggle: (state, { payload }) => {
      // reducer
      const todo = state.find(todo => todo.id === payload.id)
      
      if (todo) {
        todo.isComplete = !todo.isComplete
      }
    },

    
    // action
    remove: (state, { payload }) => {
      // reducer
      const idx = state.findIndex(todo => todo.id === payload.id)
      if (idx !== -1) {
        state.splice(idx, 1)
      }
    }
  }
})

// destructuring actions and reducer from the slice
const { actions, reducer } = todosSlice

// destructuring actions off slice and exporting
export const { add, toggle, remove } = actions;

// export reducer
export default reducer;