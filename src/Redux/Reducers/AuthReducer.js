import { LOGIN_USER,LOGIN_USER2,LOGOUT_USER,ERROR,FETCH_USER_PROFILE } from "../Type";
const initail={
    loginuser:'',
    loginuser2:'',
    loggeduser:'',
    error:''
}

const authReducer=(State=initail,action)=>{
    switch(action.type){
        case LOGIN_USER :
            return{
                loginuser:action.payload
            }
            case LOGIN_USER2 :
                return{
                    loginuser:action.payload
                }
                case LOGOUT_USER :
                    return{
                        loginuser:action.payload
                    }
                    case FETCH_USER_PROFILE :
                        return{
                            loggeduser:action.payload
                        }
                    case ERROR :
                    return{
                        loginuser:'',
                        error:action.payload
                        
                    }

    
            default:
                return State;

    }

}

export default authReducer