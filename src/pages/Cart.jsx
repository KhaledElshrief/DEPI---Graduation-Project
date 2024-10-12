import React from "react";
import CartItems from "../components/CartItems";
import PaymentInfo from "../components/PaymentInfo";
import AdditionalInfo from "../components/AdditionalInfo";
import YourOrder from "../components/YourOrder";
import PaymentMethod from "../components/PaymentMethod";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WorkAsTeacher.css";
export default function Cart() {
  return (
    <div className="container d-flex cart">
      <CartItems />
      <PaymentInfo />
      <AdditionalInfo />
      <YourOrder />
      <PaymentMethod />
    </div>
  );
}
