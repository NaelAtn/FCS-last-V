import { CLEAR_ERRORSADMIN, CLEAR_SUCCESSADMIN, CURRENT_ADMIN, EDIT_ADMINPASSWORD, FAIL_ADMIN, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN } from "../ActionsTypes/admin"


const InitialState = 
{
admin : null , 
loadAdmin : false , 
errors: null , 
isAuthAdmin : false,
success : null
}



const adminReducer = ( state = InitialState , {type,payload}) => {
    switch (type) {
        case LOAD_ADMIN:
            return {...state, loadAdmin : true}
        case LOGIN_ADMIN :
            localStorage.setItem("token" , payload.token)
            return{...state , loadAdmin : false , admin : payload.admin ,isAuthAdmin : true ,success : payload.success} 
        case CURRENT_ADMIN : 
             return {...state , admin:payload , isAuthAdmin : true , loadAdmin: false}  
        case EDIT_ADMINPASSWORD:         
             return {...state , loadAdmin : false , admin : payload.admin , isAuthAdmin : true,success : payload.success } 
        case CLEAR_ERRORSADMIN :
            return {...state , errors : null }   
        case CLEAR_SUCCESSADMIN : 
            return { ...state , success : null}  
        case LOGOUT_ADMIN :
            localStorage.removeItem("token")
            return { admin : null , 
                loadAdmin : false , 
                errors: [] , 
                isAuthAdmin : false ,   
            }      
        case FAIL_ADMIN: 
            return {...state , loadAdmin : false , errors : payload}            
        default:
            return state

    }
}


export default adminReducer