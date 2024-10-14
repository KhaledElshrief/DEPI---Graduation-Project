import axios from "axios";
import { useInsetData, useInsetDataWithImage } from "../../Hooks/UseInsertData";
import { LOGIN_USER, LOGIN_USER2,LOGOUT_USER,GET_COURSES } from "../Type";
import BaseUrl from "../../Api/BaseUrl";
import { UseGetData } from "../../Hooks/UseGetData";

export const GetAllCourses=async(dispatch)=>{
    

    try{  
      
        const response=await axios.get("http://localhost:8000/getallcourses")
       
        dispatch({
            type: GET_COURSES,
            payload: response,
            loading:false
        })
    }
    catch(e){
        console.log("jj")
       console.log(e)
        dispatch({
            type: GET_COURSES,
            payload: '',
            
        })
    }
}


