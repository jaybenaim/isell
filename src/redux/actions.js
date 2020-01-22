import { ADD_USER, ADD_ITEM } from "./actionTypes";

// let nextTodoId = 0;

// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const addUser = user => {
  return {
    type: ADD_USER,
    user
  };
};
// make api calls here for simple calls
// use react-thunk as package
export const addItem = (qty, item) => {
  return {
    type: ADD_ITEM,
    payload: {
      qty,
      item
    }
  };
};
