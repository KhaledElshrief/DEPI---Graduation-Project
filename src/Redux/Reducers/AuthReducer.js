import { LOGIN_USER,LOGIN_USER2,LOGOUT_USER,ERROR } from "../Type";
const initail={
    loginuser:'',
    loginuser2:'',
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