import { actionTypes } from "./Constant";

export const initialState = {
  current_movie: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_MOVIE:
      return {
        ...state,
        current_movie: action.current_movie,
      };
    default:
      return state;
  }
};

export default reducer;
