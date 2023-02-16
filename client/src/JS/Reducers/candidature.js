import { ADD_CANDIDATURE, CLEAR_ERRORCANDIDATURE, CLEAR_SUCCESSCANDIDATURE, DELETE_CANDIDATURE, FAIL_CANDIDATURE, GET_CANDIDATURE, LOAD_CANDIDATURE } from "../ActionsTypes/candidature";


const initialeState = {
    postulation: {},
    errors: null,
    load: false,
    success: null,
    listPostulation: [],
  };

  const candidatureReducer = (state = initialeState, { type, payload }) => {
    switch (type) { 
        case LOAD_CANDIDATURE:
            return { ...state, load: true };
        case ADD_CANDIDATURE:
            return {...state , load : false , postulation: payload.postulation, success : payload.success} 
        case FAIL_CANDIDATURE : 
            return {...state , load : false , errors : payload} 
        case DELETE_CANDIDATURE :
            return {...state , load : false , success : payload.success}   
        case GET_CANDIDATURE :
            return  {...state , load : false , listPostulation : payload }  
        case CLEAR_SUCCESSCANDIDATURE : 
            return {...state , success : null}       
        case CLEAR_ERRORCANDIDATURE :
           return {...state , errors : null }         
        default:
            return state;
    }}


export default candidatureReducer;