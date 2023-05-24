import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Tests for <TodoItem /> Component', () => {

  const todo = {
    id: 1,
    description: 'Demo',
    done: false
  };

  const onToggleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());


  test('Should show the pending Todo', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    const liElement = screen.getByRole('listitem');
    const spanElement = screen.getByLabelText('span');


    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('Should show the Todo as completed', () => {
    todo.done = true;

    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    const spanElement = screen.getByLabelText('span');

    expect(spanElement.className).toBe('align-self-center text-decoration-line-through');
  });

  test('Should call onToggleTodo when span is clicked', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
    const spanElement = screen.getByLabelText('span');

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalled();
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('Should call onDeleteTodo when delete button is clicked', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalled();
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });

});