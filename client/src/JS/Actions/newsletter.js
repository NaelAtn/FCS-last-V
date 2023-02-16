import axios from "axios";
import {
  ADD_NEWSLETTER,
  CLEAR_ERRORNEWSLETTER,
  CLEAR_SUCCESSNEWSLETTER,
  DELETE_NEWSLETTER,
  FAIL_NEWSLETTER,
  GET_NEWSLETTERS,
  LOAD_NEWSLETTER,
} from "../ActionsTypes/newletter";

export const subNewsletter = (newNewsLetter,setEmail) => async (dispatch) => {
  dispatch({ type: LOAD_NEWSLETTER });
  try {
    let result = await axios.post(
      "/api/newsletter/addNewsLetter",
      newNewsLetter
    );
    dispatch({ type: ADD_NEWSLETTER, payload: result.data });
    setEmail("")
    dispatch(getNewsLetters());
  } catch (error) {
    dispatch({ type: FAIL_NEWSLETTER, payload: error.response.data.errors });
  }
};

export const getNewsLetters = () => async (dispatch) => {
  dispatch({ type: LOAD_NEWSLETTER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/newsletter/list-newsletter", config);
    dispatch({ type: GET_NEWSLETTERS, payload: result.data.listNewsLetters });
  } catch (error) {
    dispatch({ type: FAIL_NEWSLETTER, payload: error.response.data.errors });
  }
};

export const deleteNewsletter = (id) => async (dispatch) => {
  dispatch({ type: LOAD_NEWSLETTER });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.delete(`/api/newsletter/${id}`, config);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch({ type: DELETE_NEWSLETTER, payload: result.data });
    dispatch(getNewsLetters());
  } catch (error) {
    dispatch({ type: FAIL_NEWSLETTER, payload: error.response.data.errors });
  }
};

export const clearSuccessNewsLetter = () => {
  return {
    type: CLEAR_SUCCESSNEWSLETTER,
  };
};

export const clearErrorsNewsLetter = () => {
  return {
    type: CLEAR_ERRORNEWSLETTER,
  };
};
