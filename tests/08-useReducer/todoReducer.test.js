import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Tests for todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Demo todo',
    done: false
  }];

  test('Should return the initial state', () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('Should add a todo', () => {
    const todo = {id: 2, description: 'Todo number 2', done: false};
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Should delete a todo', () => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('Should switch the value of done from a todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBeTruthy();
  });

});