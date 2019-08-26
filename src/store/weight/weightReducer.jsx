import { ADD_WEIGHT } from "./weightConstants";

const initialState = [];
export const weightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEIGHT:
      const newState = [...state, action.payload];
      return newState;
  }
  return state;
};
