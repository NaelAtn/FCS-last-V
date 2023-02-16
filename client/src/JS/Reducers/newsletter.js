import { ADD_NEWSLETTER, CLEAR_ERRORNEWSLETTER, CLEAR_SUCCESSNEWSLETTER, DELETE_NEWSLETTER, FAIL_NEWSLETTER, GET_NEWSLETTERS, LOAD_NEWSLETTER } from "../ActionsTypes/newletter"


const initialeState = 
{
newNewsLetter : {} ,
errors : null ,
load : false,
success : null ,
listNewsLetters : []
}

const newsLetterReducer = (state= initialeState , {type,payload}) => {
    switch (type) {
        case LOAD_NEWSLETTER:
            return {...state, load : true} 
        case ADD_NEWSLETTER :
            return {...state , load : false , newNewsLetter: payload.newNewsLetter, success : payload.success}  
        case FAIL_NEWSLETTER : 
            return {...state , load : false , errors : payload} 
        case DELETE_NEWSLETTER :
            return {...state , load : false , success : payload.success}    
        case GET_NEWSLETTERS :
            return  {...state , load : false ,listNewsLetters : payload }    
        case CLEAR_SUCCESSNEWSLETTER : 
             return {...state , success : null}       
        case CLEAR_ERRORNEWSLETTER :
            return {...state , errors : null }      
        default:
            return state  
    }
}

export default newsLetterReducer