import axios from "axios";
import {
  ADD_CANDIDATURE,
  CLEAR_ERRORCANDIDATURE,
  CLEAR_SUCCESSCANDIDATURE,
  DELETE_CANDIDATURE,
  FAIL_CANDIDATURE,
  GET_CANDIDATURE,
  LOAD_CANDIDATURE,
} from "../ActionsTypes/candidature";

export const addCandidature = (postulation, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_CANDIDATURE });
  try {
    let result = await axios.post(
      "/api/postulation/add-postulation",
      postulation
    );
    dispatch({ type: ADD_CANDIDATURE, payload: result.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: FAIL_CANDIDATURE, payload: error.response.data.errors });
  }
};

export const getCandidature = () => async (dispatch) => {
  dispatch({ type: LOAD_CANDIDATURE });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/postulation/get-postulation", config);
    dispatch({ type: GET_CANDIDATURE, payload: result.data.listPostulation });
  } catch (error) {
    dispatch({ type: FAIL_CANDIDATURE, payload: error.response.data.errors });
  }
};

export const deleteCandidature = (id) => async (dispatch) => {
  dispatch({ type: LOAD_CANDIDATURE });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.delete(
      `/api/postulation/delete-postulation/${id}`,
      config
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch({ type: DELETE_CANDIDATURE, payload: result.data });
    dispatch(getCandidature());
  } catch (error) {
    dispatch({ type: FAIL_CANDIDATURE, payload: error.response.data.errors });
  }
};

export const clearSuccessCandidature = () => {
  return {
    type: CLEAR_SUCCESSCANDIDATURE,
  };
};

export const clearErrorsCandidature = () => {
  return {
    type: CLEAR_ERRORCANDIDATURE,
  };
};
