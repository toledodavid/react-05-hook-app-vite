
const initialState = [{
  id: 1,
  todo: 'Drink water',
  done: false
}];


const todoReducer = (state = initialState, action = {}) => {

  if (action.type === '[TODO] add todo') {
    return [...state, action.payload];
  }

  return state;
}


let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Take a shower',
  done: false
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});
