import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import PaymentInfo from "../components/PaymentInfo";
import AdditionalInfo from "../components/AdditionalInfo";
import YourOrder from "../components/YourOrder";
import PaymentMethod from "../components/PaymentMethod";
import "bootstrap/dist/css/bootstrap.min.css";

import "./WorkAsTeacher.css";
import { GetLoggedUserCart } from "../Redux/Actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
export default function Cart() {
  const dispatch=useDispatch()
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    dispatch(GetLoggedUserCart)
  }, []);
  const data=useSelector((state)=>state.cartReducer.usercart)
 

  useEffect(() => {
    if(data){
      setCartItems(data?.data?.data?.cartItems)
      setTotalPrice(data?.data?.data?.totalPrice)
    }
  
  }, [data]);

  function handleDeleteItem(id) {
  
  
  }
  return (
    <div className="container d-flex cart">
      <CartItems
        cartItems={cartItems}
        totalPrice={totalPrice}
        onDelete={handleDeleteItem}
      />
      <PaymentInfo />
      <AdditionalInfo />
      <YourOrder cartItems={cartItems} totalPrice={totalPrice} />
      <PaymentMethod />
    </div>
  );
}
