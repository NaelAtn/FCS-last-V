import { ADD_MAIL, CLEAR_ERRORMAIL, CLEAR_SUCCESSMAIL, FAIL_MAIL, LOAD_MAIL } from "../ActionsTypes/mail"


const initialState = 
{
mailOptions : {} ,
errors : null ,
load : false,
success : null ,
}


const mailReducer = (state= initialState , {type,payload}) => {
    switch (type) {
        case LOAD_MAIL:
            return {...state, load : true}  
        case ADD_MAIL :
            return {...state , load : false , mailOptions: payload.mailOptions, success : payload.success}    
        case FAIL_MAIL : 
            return {...state , load : false , errors : payload}       
        case CLEAR_SUCCESSMAIL : 
            return {...state , success : null}       
        case CLEAR_ERRORMAIL :
            return {...state , errors : null }      
        default:
            return state  
    }
}
export default mailReducer