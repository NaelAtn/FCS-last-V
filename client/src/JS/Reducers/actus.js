import { ADD_ACTUS, CLEAR_ERRORACTUS, CLEAR_SUCCESSACTUS, DELETE_ACTUS, FAIL_ACTUS, GET_ACTU, GET_ACTUS, LOAD_ACTUS } from "../ActionsTypes/actus";

const initialeState = {
  actus: {},
  errors: null,
  load: false,
  success: null,
  listActus: [],
  likes : null,
  actusToGet : {}
};

const actusReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
         case LOAD_ACTUS:
      return { ...state, load: true };
         case ADD_ACTUS :
            return {...state , load : false , actus: payload.actus, success : payload.success , errors : payload.error}  
        case FAIL_ACTUS : 
            return {...state , load : false , errors : payload}   
        case GET_ACTU : 
          return {...state , load : false , actusToGet : payload}
        case DELETE_ACTUS :
            return {...state , load : false , success : payload.success} 
        case GET_ACTUS :
            return  {...state , load : false , listActus : payload  } 
        case CLEAR_SUCCESSACTUS : 
            return {...state , success : null}       
        case CLEAR_ERRORACTUS :
           return {...state , errors : null }          
    default:
      return state;
  }
};

export default actusReducer;
