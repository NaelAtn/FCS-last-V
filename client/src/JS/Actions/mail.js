import axios from "axios";
import {
  ADD_MAIL,
  CLEAR_ERRORMAIL,
  CLEAR_SUCCESSMAIL,
  FAIL_MAIL,
  LOAD_MAIL,
} from "../ActionsTypes/mail";

export const addMail = (mailOptions,setName,setPhone,setEmail,setMessage) => async (dispatch) => {
  dispatch({ type: LOAD_MAIL });
  try {
    let result = await axios.post("/api/mail/send-mail", mailOptions);
    dispatch({ type: ADD_MAIL, payload: result.data });
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    dispatch({ type: FAIL_MAIL, payload: error.response.data.errors });
  }
};

export const clearSuccessMail = () => {
  return {
    type: CLEAR_SUCCESSMAIL,
  };
};

export const clearErrorsMail = () => {
  return {
    type: CLEAR_ERRORMAIL,
  };
};
