import BaseUrl from "../Api/BaseUrl";

    const UseGetData=async(url,parmas)=>{
        const config={
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem("token")}` 
              
              }
        }
        

    const res=await BaseUrl.get(url,parmas,config)
    return res.data;
       
}
