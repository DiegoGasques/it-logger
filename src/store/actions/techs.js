import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING
} from "./types";

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const getTechs = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: TECHS_ERROR,
      payload: e.response.statusText
    });
  }
};
