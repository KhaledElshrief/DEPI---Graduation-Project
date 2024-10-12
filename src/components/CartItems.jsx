import React from "react";
import test from "../images/12.webp";
export default function CartItems() {
  return (
    <section id="cartItems">
      <hr />
      <div className="row text-center">
        <p className="col col-1">حذف</p>
        <p className="col col-5"> المنتج</p>
        <p className="col col-2">السعر</p>
        <p className="col col-2">العدد</p>
        <p className="col col-2">الاجمالي</p>
      </div>
      <hr />
      <Item />
      <Item />
      <Item />
      <div className="row text-center">
        <hr />
        <p className="col col-10 "></p>
        <p className="col col-2 ">الاجمالي</p>
        <hr />
      </div>
    </section>
  );
}

function Item() {
  return (
    <div className="row text-center cartItem">
      <p className="col col-1 fs-3">&times;</p>
      <p className="col col-5 itemInfo">
        <img src={test} alt="" />
        <span>كورس تست من الدرجة الاولي</span>
      </p>
      <p className="col col-2">250 جنيها</p>
      <p className="col col-2">1</p>
    </div>
  );
}
