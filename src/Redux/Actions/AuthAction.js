import axios from "axios";
import { useInsetData, useInsetDataWithImage } from "../../Hooks/UseInsertData";
import { LOGIN_USER, LOGIN_USER2,LOGOUT_USER } from "../Type";
import BaseUrl from "../../Api/BaseUrl";



export const loginUser=(data)=>async(dispatch)=>{

    try{
      
        const response =await useInsetDataWithImage("/auth/signup",data)
         console.log(response.data.data)     


      
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading:false
        })
    }
    catch(e){
        console.log(e)
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
            
        })
    }

}


export const loginUser2=(data)=>async(dispatch)=>{

    try{
     
        const response =await  BaseUrl.post("/auth/login",data)
        console.log("jjj",response)
         console.log(response.data.data)     


      
        dispatch({
            type: LOGIN_USER2,
            payload: response,
            loading:false
        })
    }
    catch(e){
        console.log(e)
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





