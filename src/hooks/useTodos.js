import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';



const initialState = [];

const initializer = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };

    dispatch(action);
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: id
    };

    dispatch(action);
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }


  return {
    todos,
    totalTodosCounter: todos.length,
    todosPendingCounter: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };

}