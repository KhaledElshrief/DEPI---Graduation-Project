import React from "react";
export default function CartItems({ cartItems, totalPrice, onDelete }) {
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
      {cartItems.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} />
      ))}
      <div className="row text-center">
        <hr />
        <p className="col col-10 "></p>
        <p className="col col-2 ">{totalPrice} جنيها</p>
        <hr />
      </div>
    </section>
  );
}

function Item({ item, onDelete }) {
  return (
    <div className="row text-center cartItem">
      <p className="col col-1 fs-3 delItem" onClick={() => onDelete(item.id)}>
        &times;
      </p>
      <p className="col col-5 itemInfo">
        <img src={item.image} alt="" />
        <span>{item.title}</span>
      </p>
      <p className="col col-2">{item.price} جنيها </p>
      <p className="col col-2">1</p>
      <p className="col col-2">{item.price} جنيها </p>
    </div>
  );
}
