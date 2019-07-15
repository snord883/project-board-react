import axios from 'axios';
import { GET_ERRORS, GET_PROJECT_TASKS, DELETE_PROJECT_TASK } from './types';

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

export const getBacklog = (project_tasks) => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/board/all");
  dispatch({
    type: GET_PROJECT_TASKS,
    payload:res.data
  });
}

export const deleteProjectTask = (id) => async dispatch => {
  if (window.confirm(`Are you sure you want to delete project task id: ${id}`)) {
    await axios.delete(`http://localhost:8080/api/board/${id}`);
    dispatch({
      type: DELETE_PROJECT_TASK,
      payload:id
    });
  }
}
