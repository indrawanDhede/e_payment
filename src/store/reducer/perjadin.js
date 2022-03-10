import { GET_PERJADIN } from "../action/type";

const initStatePerjadin = {
  perjadin: [],
};

export const perjadinReducer = (state = initStatePerjadin, action) => {
  switch (action.type) {
    case GET_PERJADIN:
      return {
        ...state,
        perjadin: action.payload,
      };
    default:
      return state;
  }
};
