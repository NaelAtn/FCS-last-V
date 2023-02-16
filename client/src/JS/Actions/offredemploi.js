import axios from "axios";
import {
  ADD_OFFREDEMPLOI,
  CLEAR_ERROROFFREDEMPLOI,
  CLEAR_SUCCESSOFFREDEMPLOI,
  DELETE_OFFREDEMPLOI,
  FAIL_OFFREDEMPLOI,
  GET_OFFREDEMPLOI,
  GET_ONEOFFREDEMPLOI,
  LOAD_OFFREDEMPLOI,
} from "../ActionsTypes/offredemploi";

export const addOffredemploi = (newOffredemploi,navigate) => async (dispatch) => {
  dispatch({ type: LOAD_OFFREDEMPLOI });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.post(
      "/api/offredemploi/add-offre-d-emploi",
      newOffredemploi,
      config
    );
    dispatch({ type: ADD_OFFREDEMPLOI, payload: result.data });
    navigate(-1)
    dispatch(getOffredemploi());
  } catch (error) {
    dispatch({ type: FAIL_OFFREDEMPLOI, payload: error.response.data.errors });
  }
};

export const getOffredemploi = () => async (dispatch) => {
  dispatch({ type: LOAD_OFFREDEMPLOI });
  try {
    let result = await axios.get("/api/offredemploi/get-offre-d-emploi");
    dispatch({ type: GET_OFFREDEMPLOI, payload: result.data.listOffredemploi });
  } catch (error) {
    dispatch({ type: FAIL_OFFREDEMPLOI, payload: error.response.data.errors });
  }
};

export const getOneOffre = (id) => async (dispatch) => {
  dispatch({ type: LOAD_OFFREDEMPLOI });
  try {
    let result = await axios.get(`/api/offredemploi/${id}`);
    dispatch({ type: GET_ONEOFFREDEMPLOI, payload: result.data.offreToGet });
  } catch (error) {
    dispatch({ type: FAIL_OFFREDEMPLOI, payload: error.response.data.errors });
  }
};

export const deleteOffredemploi = (id) => async (dispatch) => {
  dispatch({ type: LOAD_OFFREDEMPLOI });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.delete(`/api/offredemploi/${id}`, config);
    dispatch({ type: DELETE_OFFREDEMPLOI, payload: result.data });

    dispatch(getOffredemploi());
  } catch (error) {
    dispatch({ type: FAIL_OFFREDEMPLOI, payload: error.response.data.errors });
  }
};

export const clearSuccessOffredemploi = () => {
  return {
    type: CLEAR_SUCCESSOFFREDEMPLOI,
  };
};

export const clearErrorsOffredemploi = () => {
  return {
    type: CLEAR_ERROROFFREDEMPLOI,
  };
};
