import {
  CLEAR_ERRORSADMIN,
  CLEAR_SUCCESSADMIN,
  CURRENT_ADMIN,
  EDIT_ADMINPASSWORD,
  FAIL_ADMIN,
  LOAD_ADMIN,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
} from "../ActionsTypes/admin";
import axios from "axios";

export const loginAdmin = (admin, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
 
  try {
    let result = await axios.post("/api/admin/loginAdmin", admin);
    navigate("/");
    dispatch({ type: LOGIN_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
  }
};

export const currentAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/admin/currentAdmin", config);
    dispatch({ type: CURRENT_ADMIN, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};

export const logoutAdmin = (navigate) => async (dispatch) => {
  dispatch({ type: LOGOUT_ADMIN });
  navigate("/");
};

export const editadminpassword = (id, newAdmin,navigate) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.put(`/api/admin/password/${id}`, newAdmin,config);
    dispatch({ type: EDIT_ADMINPASSWORD, payload: result.data });
    navigate("/")
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
  }
};


export const clearErrorsAdmin = () => {
  return {
    type: CLEAR_ERRORSADMIN,
  };
};

export const clearSuccessAdmin = () => {
  return {
    type: CLEAR_SUCCESSADMIN,
  };
};
