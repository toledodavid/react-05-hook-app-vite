import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Tests for <TodoApp /> component', () => {

  useTodos.mockReturnValue({
    todos: [
      {id: 1, description: 'Demo 1', done: false},
      {id: 2, description: 'Demo 2', done: true},
    ],
    totalTodosCounter: 2,
    todosPendingCounter: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  });

  test('Should show the component correctly', () => {
    render(<TodoApp />);

    expect(screen.getByText('Demo 1')).toBeTruthy();
    expect(screen.getByText('Demo 2')).toBeTruthy();
    expect(screen.getByRole('heading', {level: 1}).textContent).toBe('TodoApp: 2 - pending: 1');
  });

});