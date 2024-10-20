import React, { useEffect } from "react";
import { DeleteItemFromCart } from "../Redux/Actions/CartAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import BaseUrl from "../Api/BaseUrl";
export default function CartItems({ cartItems, totalPrice, onDelete }) {
  return (
    <section id="cartItems">
      <hr />
      <div className="row text-center">
        <p className="col col-1">حذف</p>
        <p className="col col-5"> المنتج</p>
        <p className="col col-2">السعر</p>
        <p className="col col-2">المستوى </p>
        <p className="col col-2">الاجمالي</p>
      </div>
      <hr />
      {cartItems?.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} />
        
      ))}
      <div className="row text-center">
        <hr />
        <p className="col col-10 "></p>
        <p className="col col-2 ">{totalPrice}  جنيها</p>
        <hr />
      </div>
    </section>
  );
}

function Item({ item, onDelete }) {
 const dispatch=useDispatch();
  const  handelDelete= async(id)=>{
    // dispatch(DeleteItemFromCart(id))
    console.log(id.course._id)

    try{
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res= await axios.delete(`https://e-commerce-3-gu5g.onrender.com/cart/${id.course._id}`,config)
     window.location.reload();
    }
    catch(e){
      console.log(e)
    }
   
  

    
  }
  return (
    <div className="row text-center cartItem">
      <p className="col col-1 fs-3 delItem" onClick={()=>handelDelete(item)}>
        &times;
      </p>
      <p className="col col-5 itemInfo">
    
        <span>{item.course?.title}</span>
      </p>
      <p className="col col-2">{item?.course?.price} جنيها </p> 
      <p className="col col-2 ">{item?.course?.level}</p>
      <p className="col col-2">{item?.price} جنيها </p>
      
    </div>
  );
}
