import {combineReducers} from "redux"
import authReducer from "./AuthReducer"
import CourseReducer from "./CourseReducer"


export default combineReducers({
    
    authReducer:authReducer,
    CourseReducer:CourseReducer
    
 
})