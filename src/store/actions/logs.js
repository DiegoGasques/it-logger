import { GET_LOGS, LOGS_ERROR, SET_LOADING } from "./types";

export const getLogs = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
