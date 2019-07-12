import axios from 'axios';
import { GET_ERRORS } from './types';
import { GET_PROJECT_TASKS } from "./types";

export const addProjectTask = (project_task, history) => async dispatch => {
  try {
    await axios.post("http://localhost:8080/api/board", project_task);
    history.push("/");
    dispatch({
      type:GET_ERRORS,
      payload:{}
    })
  } catch (e) {
    dispatch({
      type:GET_ERRORS,
      payload:e.response.data
    })
  }
};

export const getBacklog = (project_tasks, history) => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/board/all");
  dispatch({
    type: GET_PROJECT_TASKS,
    payload:res.data
  });
}
