import { LOGIN_USER,LOGIN_USER2,LOGOUT_USER,GET_COURSES } from "../Type";

const initail={
    getallcourse:'',
 
}

const CourseReducer=(State=initail,action)=>{
    switch(action.type){
        case GET_COURSES :
            return{
                getallcourse:action.payload
            }
          
            default:
                return State;
    }

}

export default CourseReducer