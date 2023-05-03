import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';


export const TodoList = ({todos = []}) => {
  return(
    <ul className='list-group'>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}