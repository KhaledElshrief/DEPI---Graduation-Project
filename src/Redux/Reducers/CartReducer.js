import { LOGIN_USER,LOGIN_USER2,LOGOUT_USER,ERROR,CART,USER_CART } from "../Type";
const initail={
    cart:'',
    usercart:'',
  
}


const cartReducer=(State=initail,action)=>{
    switch(action.type){
        case CART :
            return{
                cart:action.payload
            }
            case USER_CART :
                return{
                    usercart:action.payload
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

export default cartReducer