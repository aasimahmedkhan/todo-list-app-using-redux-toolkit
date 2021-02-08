import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, toggle, remove } from './todoSlice'


export const Todos = () => {
  const dispatch = useDispatch()
  // get todos from state
  const todos = useSelector(state => state.todos)
  const completed = useSelector(state => state.todos.isComplete)
  const [todoInput, setTodoInput] = useState('')

  const removeTodoHandler = (id) => {
    dispatch(remove(id));
  }
  const handleInputChange = e => {
    setTodoInput(e.target.value)
  }

  const handleNewTodo = e => {
    e.preventDefault()
    // if no input, just return
    if (!todoInput.length) return
    // dispatch will send our create action
    dispatch(add(todoInput))
    // reset input
    setTodoInput('')
  }

  const handleToggle = id => {
    // send toggle action updated state
    dispatch(
      toggle({
        id,
        isComplete: !completed
      })
    )
  }

  return (
    <div className='App'>
      <div className='App__header'>
        <h1> Todo List App with Redux Toolkit</h1>
        <form onSubmit={handleNewTodo}>
          <label htmlFor='new-todo' style={{ display: 'none' }}>
            New Todo:
          </label>

          <input
            onChange={handleInputChange}
            id='new-todo'
            value={todoInput}
            placeholder='Text...'
          />
          <button type='submit'> Add Todo </button>
        </form>
      </div>
      <div className='App__body'>
        <ul className='App__list'>
          {todos.map(todo => (
            <li
              className={`${todo.isComplete ? 'done' : ''}`}
              key={todo.id}
              onClick={() => handleToggle(todo.id)}>
              {todo.desc}

              <button
               type = 'delete'
                 onClick={() => removeTodoHandler ({ id: todo.id })}> x
                  
      </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


