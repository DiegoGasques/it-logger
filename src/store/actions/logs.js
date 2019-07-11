import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS
} from "./types";

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
      payload: e.response.statusText
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const addLog = log => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" }
    });

    const resLog = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: resLog
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText
    });
  }
};

export const deleteLog = log => async dispatch => {
  try {
    dispatch({
      type: DELETE_LOG,
      payload: log.id
    });

    await fetch(`/logs/${log.id}`, {
      method: "DELETE"
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText
    });

    dispatch({
      type: ADD_LOG,
      payload: log
    });
  }
};

export const updateLog = (edited, current) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_LOG,
      payload: edited
    });

    await fetch(`/logs/${current.id}`, {
      method: "PUT",
      body: JSON.stringify(edited),
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText
    });

    dispatch({
      type: UPDATE_LOG,
      payload: current
    });
  }
};

export const searchLogs = query => async dispatch => {
  try {
    const res = await fetch(`/logs?q=${query}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText
    });
  }
};

export const setCurrent = log => ({
  type: SET_CURRENT,
  payload: log
});

export const clearCurrent = () => ({
  type: CLEAR_CURRENT
});
