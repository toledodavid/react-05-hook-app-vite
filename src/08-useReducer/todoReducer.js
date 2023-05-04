

export const todoReducer = (state = [], action) => {
  switch(action.type) {
    case '[TODO] Add Todo':
      return [
        ...state,
        action.payload
      ];

    case '[TODO] Delete Todo':
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}