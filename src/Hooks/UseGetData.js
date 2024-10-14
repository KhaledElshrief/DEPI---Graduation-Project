import BaseUrl from "../Api/BaseUrl";

    const UseGetData=async(url,parmas)=>{

    const res=await BaseUrl.get(url,parmas)
    return res.data;
       
}


export  {UseGetData}


