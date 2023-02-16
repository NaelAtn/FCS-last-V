import {combineReducers} from 'redux' ; 
import newsLetterReducer from './newsletter'
import mailReducer from './mail'
import reservationReducer from './reservation'
import adminReducer from "./admin"
import offredemploiReducer from "./offredemploi"
import actusReducer  from "./actus"
import candidatureReducer from "./candidature"

const rootReducer = combineReducers({newsLetterReducer,mailReducer,reservationReducer,adminReducer,offredemploiReducer,actusReducer,candidatureReducer})

export default rootReducer ;