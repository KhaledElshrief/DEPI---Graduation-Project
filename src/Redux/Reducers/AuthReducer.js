import { LOGIN_USER,LOGIN_USER2,LOGOUT_USER } from "../Type";
const initail={
    loginuser:'',
    loginuser2:''
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
    
            default:
                return State;

    }

}

export default authReducer