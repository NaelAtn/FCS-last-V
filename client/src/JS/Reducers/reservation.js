import { ADD_RESERVATION, CLEAR_ERRORRESERVATION, CLEAR_SUCCESSRESERVATION, DELETE_RESERVATION, FAIL_RESERVATION, GET_RESERVATION, ISDONE_RESERVATION, LOAD_RESERVATION, NOTISDONE_RESERVATION } from "../ActionsTypes/reservation"


const initialState = 
{
newReservation : {} ,
errors : null ,
load : false,
success : null ,
listReservations :[],
NotisDoneReservation : {},
isDoneReservation :{}
}


const reservationReducer = (state= initialState , {type,payload}) => {
    switch (type) {
        case LOAD_RESERVATION:
            return {...state, load : true}  
        case ADD_RESERVATION :
            return {...state , load : false , newReservation: payload.newReservation, success : payload.success}    
        case FAIL_RESERVATION : 
            return {...state , load : false , errors : payload}       
        case CLEAR_SUCCESSRESERVATION : 
             return {...state , success : null} 
        case ISDONE_RESERVATION :
            return {...state , success : payload.success ,isDoneReservation : payload.isDoneReservation,load : false }
        case NOTISDONE_RESERVATION :
            return {...state , success : payload.success , NotisDoneReservation:payload.NotisDoneReservation,load : false }
        case DELETE_RESERVATION :
            return {...state , load : false , success : payload.success}      
        case GET_RESERVATION :
            return  {...state , load : false ,listReservations : payload }     
        case CLEAR_ERRORRESERVATION :
            return {...state , errors : null }      
        default:
            return state  
    }
}
export default reservationReducer