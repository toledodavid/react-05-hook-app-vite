import { render, screen } from '@testing-library/react';
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

});