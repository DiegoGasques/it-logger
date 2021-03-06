import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_TECH_LOADING
} from "./types";

export const setLoading = () => {
  return {
    type: SET_TECH_LOADING
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

export const addTech = tech => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (e) {
    console.log(e.response);
    dispatch({
      type: TECHS_ERROR,
      payload: e.response.statusText
    });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    dispatch(setLoading());

    await fetch(`/techs/${id}`, { method: "DELETE" });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: TECHS_ERROR,
      payload: e.response.statusText
    });
  }
};
