import axios from "axios";
import { useInsetData, useInsetDataWithImage } from "../../Hooks/UseInsertData";
import { LOGIN_USER, LOGIN_USER2,LOGOUT_USER,ERROR,CART,USER_CART,DELETE_ITEM_CART } from "../Type";
import BaseUrl from "../../Api/BaseUrl";





export const AddToCart=(data)=>async(dispatch)=>{
  
    const requestBody = {
        courseId: data,
      };
     
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

    try{
     
        const response = await  BaseUrl.post("/cart",requestBody,config)

        dispatch({
            type: CART,
            payload: response,
            loading:false
        })
    }
    catch(e){
        dispatch({
            type: CART,
            payload: e.response,
            
        })
    }

}


export const GetLoggedUserCart=async(dispatch)=>{
  
  
     
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

    try{
     
        const response = await  BaseUrl.get("/cart",config)

        dispatch({
            type: USER_CART,
            payload: response,
            loading:false
        })
    }
    catch(e){
        dispatch({
            type: USER_CART,
            payload: e.response,
            
        })
    }

}



export const DeleteItemFromCart=(id)=>async(dispatch)=>{
    console.log("Jj")
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
      try{       
          const response = await  BaseUrl.delete(`/cart/${id}`,config)
  
          dispatch({
              type: DELETE_ITEM_CART,
              payload: response,
              loading:false
          })
      }
      catch(e){
          dispatch({
              type: DELETE_ITEM_CART,
              payload: e.response,
              
          })
      }
  
  }
  
