import React, { useReducer, useRef, useEffect } from 'react';
import './Todos.css';

import * as constants from './constants';
import { todoReducer } from './todoReducer';

const initialState = [...constants.TODO_SEED];
// const initialState = [
//   { id: 1, name: 'Get started', complete: false }
// ];

const Todo = () => {
  const inputRef = useRef();
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const completedTodos = todos.filter(todo => todo.complete);

  useEffect(() => {
    // inputRef.current.focus();
    document.title = `You have ${completedTodos.length} items completed!`;
  })

  function addTodo(event) {
    event.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      name: inputRef.current.value,
      complete: false
    });
    inputRef.current.value = '';
  }
  function toggleComplete(id) {
    dispatch({ type: 'TOGGLE_COMPLETE', id });
  }
  function deleteTodo(id) {
    dispatch({ type: 'DELETE_TODO', id });
  }
  function clearTodos() {
    dispatch({ type: 'CLEAR_TODOS' });
  }

  return (
    <>
      <div className="todo-input">
        <form onSubmit={addTodo}>
          <input ref={inputRef} type="search" id="add-todo" placeholder="Add Todo..." />
        </form>
      </div>
      <div className="column-container">
        {todos.map((todo) => (
          <div className={`column-item ${todo.complete ? 'completed' : null}`}
            key={todo.id}>
            <div className="flex-container">
              <div className="todo-name" onClick={() => toggleComplete(todo.id)}>
                {todo.name}
              </div>
              <div className="todo-delete" onClick={() => deleteTodo(todo.id)}>
                &times;
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => clearTodos()}>
        CLEAR TODOS
      </button>
    </>
  );
}

export default Todo;