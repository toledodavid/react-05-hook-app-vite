import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const initialState = [
  {
    id: new Date().getTime(),
    description: 'Take a shower',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Drink a cup of coffee',
    done: false
  }
];


export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };

    dispatch(action);
  }


  return(
    <>
      <h1>TodoApp: 10 - <small>pending: 2</small></h1>
      <hr />

      <div className='container'>
        <div className="row">
          <div className="col-7">

            <TodoList todos={todos} />

          </div>

          <div className="col-5">
            <h4>Add TODO</h4>
            <hr />

            <TodoAdd onNewTodo={handleNewTodo} />
          </div>
        </div>
      </div>
    </>
  );
}