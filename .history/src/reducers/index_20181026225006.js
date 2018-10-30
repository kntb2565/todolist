import * as types from '../constants/ActionTypes';

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDTODO:
      return Object.assign({}, state, { todos: [...state.todos, action.todo] });
    default:
      return state;
  }
}