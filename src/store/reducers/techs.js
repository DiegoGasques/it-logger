import { SET_LOADING, GET_TECHS, TECHS_ERROR } from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
