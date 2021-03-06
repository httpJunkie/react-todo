import React, { useState, useReducer, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
  const completedTodos = todos.filter((todo) => todo.complete); //Why not a Hook?

  const [toHome, setToHome] = useState(false);

  useEffect(() => {
    document.title = `${completedTodos.length} completed todos`;
  });

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
    setTimeout(() => setToHome(true), 2000)
  }

  return (
    <>
      {toHome ? <Redirect to="/" /> : null}
      <div className="todo-input">
        <form onSubmit={addTodo}>
          <input ref={inputRef} type="search" id="add-todo" placeholder="Add Todo..." />
        </form>
      </div>
      <div className="todo-container">
        {todos.map((todo) => (
          <div className={`todo-item ${todo.complete ? 'complete' : ''}`} key={todo.id}>
            <div className="item-container">
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
      <button onClick={() => clearTodos()}>CLEAR TODOS</button>
    </>
  );
}

export default Todo;