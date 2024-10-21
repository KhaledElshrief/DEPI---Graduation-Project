import axios from "axios";
import { useInsetData, useInsetDataWithImage } from "../../Hooks/UseInsertData";
import { LOGIN_USER, LOGIN_USER2,LOGOUT_USER,ERROR,CART,FETCH_USER_PROFILE } from "../Type";
import BaseUrl from "../../Api/BaseUrl";



export const loginUser=(data)=>async(dispatch)=>{

    try{
      
        const response =await useInsetDataWithImage("/auth/signup",data)    
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading:false
        })
    }
    catch(e){

        dispatch({
            type: LOGIN_USER,
            payload: e.response,
            
        })
    }

}


export const loginUser2=(data)=>async(dispatch)=>{

    try{
     
        const response =await  BaseUrl.post("/auth/login",data)
  


      
        dispatch({
            type: LOGIN_USER2,
            payload: response,
            loading:false
        })
    }
    catch(e){
        dispatch({
            type: LOGIN_USER2,
            payload: e.response,
            
        })
    }

}

export const logout=async(dispatch)=>{

    try{
      
        dispatch({
            type: LOGOUT_USER,
            payload: '',
            loading:false
        })
    }
    catch(e){
       
        dispatch({
            type: LOGOUT_USER,
            payload: '',
            
        })
    }
}


export const fetchUserProfile=async(dispatch)=>{

    const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };



    try{
        const response =await  BaseUrl.get("/auth/loggedUser",config)
       
      
        dispatch({
            type: FETCH_USER_PROFILE,
            payload: response,
            loading:false
        })
    }
    catch(e){
       
        dispatch({
            type: FETCH_USER_PROFILE,
            payload: e.response
            
        })
    }
}



