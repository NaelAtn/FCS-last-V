import { ADD_RESERVATION, CLEAR_ERRORRESERVATION, CLEAR_SUCCESSRESERVATION, DELETE_RESERVATION, FAIL_RESERVATION, GET_RESERVATION, ISDONE_RESERVATION, LOAD_RESERVATION } from "../ActionsTypes/reservation"
import axios from "axios"

export const addReservation = (newReservation,navigate) => async(dispatch) => {
    dispatch ({type : LOAD_RESERVATION}) 
    try {
        let result = await axios.post('/api/reservation/post-reservation',newReservation)
        dispatch (  { type : ADD_RESERVATION, payload : result.data}) 
        dispatch (getReservation())  
        navigate("/")
           
    } catch (error) {
        console.log("msg" ,error.response.data.errors )
        dispatch ({type : FAIL_RESERVATION, payload : error.response.data.errors})

    }
}

export const  clearSuccessReservation = () => {
    return {
        type : CLEAR_SUCCESSRESERVATION
    }
}


export const clearErrorsReservation = () => {
    return {
        type : CLEAR_ERRORRESERVATION
    }
}

export const getReservation = () => async (dispatch) => {
    dispatch ({type : LOAD_RESERVATION})
    try {
        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }}
        let result = await axios.get('/api/reservation/get-reservation',config)
        dispatch ({ type : GET_RESERVATION, payload : result.data.listReservations})
    } catch (error) {
        dispatch ({type : FAIL_RESERVATION , payload : error.response.data.errors})
    }
}

export const deleteReservation= (id) => async (dispatch) => {
    dispatch ({type : LOAD_RESERVATION})
    try {
        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }}
        let result = await axios.delete(`/api/reservation/${id}`,config)
        dispatch ({ type : DELETE_RESERVATION, payload : result.data})
        dispatch (getReservation())
    } catch (error) {
        dispatch ({type : FAIL_RESERVATION , payload : error.response.data.errors})
    }
}

export const updateisDoneReservation= (id,isDoneReservation) => async (dispatch) => {
    dispatch ({type : LOAD_RESERVATION})
    try {
        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }}
        let result = await axios.put(`/api/reservation/updateIsDone/${id}`,isDoneReservation,config)
        dispatch ({ type : ISDONE_RESERVATION, payload : result.data})
        dispatch (getReservation())
    } catch (error) {
        dispatch ({type : FAIL_RESERVATION , payload : error.response.data.errors})
    }
}

export const updatenotisDoneReservation= (id,NotisDoneReservation) => async (dispatch) => {
    dispatch ({type : LOAD_RESERVATION})
    try {
        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }}
        let result = await axios.put(`/api/reservation/updateNotDone/${id}`,NotisDoneReservation,config)
        dispatch ({ type : ISDONE_RESERVATION, payload : result.data})
        dispatch (getReservation())
    } catch (error) {
        dispatch ({type : FAIL_RESERVATION , payload : error.response.data.errors})
    }
}