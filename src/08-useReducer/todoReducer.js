

export const todoReducer = (state = [], action) => {
  switch(action.type) {
    case '[TODO] Add Todo':
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}