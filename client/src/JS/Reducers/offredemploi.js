import { ADD_OFFREDEMPLOI, CLEAR_ERROROFFREDEMPLOI, CLEAR_SUCCESSOFFREDEMPLOI, DELETE_OFFREDEMPLOI, FAIL_OFFREDEMPLOI, GET_OFFREDEMPLOI, GET_ONEOFFREDEMPLOI, LOAD_OFFREDEMPLOI } from "../ActionsTypes/offredemploi"


const initialeState = 
{
newOffredemploi : {} ,
offreToGet : {} ,
errors : null ,
load : false,
success : null ,
listOffredemploi : []
}


const offredemploiReducer = (state= initialeState , {type,payload}) => {
    switch (type) {
        case LOAD_OFFREDEMPLOI:
            return {...state, load : true} 
        case ADD_OFFREDEMPLOI :
            return {...state , load : false , newOffredemploi: payload.newOffredemploi, success : payload.success}  
        case GET_ONEOFFREDEMPLOI : 
            return {...state , load : false , offreToGet : payload}   
        case FAIL_OFFREDEMPLOI : 
            return {...state , load : false , errors : payload}    
        case DELETE_OFFREDEMPLOI :
            return {...state , load : false , success : payload.success} 
        case GET_OFFREDEMPLOI :
            return  {...state , load : false ,listOffredemploi : payload }    
        case CLEAR_SUCCESSOFFREDEMPLOI : 
             return {...state , success : null}       
        case CLEAR_ERROROFFREDEMPLOI :
            return {...state , errors : null }      
        default:
            return state  
    }

}

export default offredemploiReducer