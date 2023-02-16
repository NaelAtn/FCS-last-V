import axios from "axios";
import {
  ADD_ACTUS,
  CLEAR_ERRORACTUS,
  CLEAR_SUCCESSACTUS,
  DELETE_ACTUS,
  FAIL_ACTUS,
  GET_ACTU,
  GET_ACTUS,
  LOAD_ACTUS,
} from "../ActionsTypes/actus";

export const addActus = (actus, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_ACTUS });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.post("/api/actus/postActus", actus, config);
    dispatch({ type: ADD_ACTUS, payload: result.data });
    dispatch(getActus());
    navigate("/blog");
  } catch (error) {
    dispatch({ type: FAIL_ACTUS, payload: error.response.data.errors });
  }
};

export const getOneActus = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ACTUS });
  try {
    let result = await axios.get(`/api/actus/getoneactus/${id}`);
    dispatch({ type: GET_ACTU, payload: result.data.actusToGet });
  } catch (error) {
    dispatch({ type: FAIL_ACTUS, payload: error.response.data.errors });
  }
};

export const getActus = () => async (dispatch) => {
  dispatch({ type: LOAD_ACTUS });
  try {
    let result = await axios.get("/api/actus/getActus");
    dispatch({ type: GET_ACTUS, payload: result.data.listActus });
  } catch (error) {
    dispatch({ type: FAIL_ACTUS, payload: error.response.data.errors });
  }
};

export const deleteActus = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ACTUS });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.delete(`/api/actus/delete/${id}`, config);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch({ type: DELETE_ACTUS, payload: result.data });
    dispatch(getActus());
  } catch (error) {
    dispatch({ type: FAIL_ACTUS, payload: error.response.data.errors });
  }
};

export const addFavActus = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ACTUS });
  try {
    await axios.put(`/api/actus/addFav/${id}`);
    dispatch(getActus());
    dispatch(getOneActus());
  } catch (error) {
    dispatch({ type: FAIL_ACTUS, payload: error.response.data.errors });
  }
};

export const removeFavActus = (id) => async (dispatch) => {
  dispatch({ type: LOAD_ACTUS });
  try {
    await axios.put(`/api/actus/removeFav/${id}`);
    dispatch(getActus());
    dispatch(getOneActus());
  } catch (error) {
    dispatch({ type: FAIL_ACTUS, payload: error.response.data.errors });
  }
};

export const clearSuccessActus = () => {
  return {
    type: CLEAR_SUCCESSACTUS,
  };
};

export const clearErrorsActus = () => {
  return {
    type: CLEAR_ERRORACTUS,
  };
};
