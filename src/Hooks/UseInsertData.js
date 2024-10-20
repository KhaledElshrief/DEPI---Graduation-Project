import BaseUrl from "../Api/BaseUrl";

const useInsetData=async(url,parmas)=>{
    const config={
        headers: {  
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          }
    }
    const res=await BaseUrl.post(url,parmas,config)
    return res
}
 

const useInsetDataWithImage=async(url,parmas)=>{
    const config={
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          
          }
    }
    
    const res=await BaseUrl.post(url,parmas,config)
  
   
    return res;
}


export  {useInsetDataWithImage,useInsetData}