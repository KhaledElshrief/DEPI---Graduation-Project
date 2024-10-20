import React from "react";

export default function YourOrder({ cartItems, totalPrice }) {
 
  return (
    <section className="YourOrder text-center">
      <h2 className="mb-5">طلبك</h2>
      <hr />
      <div className="row">
        <p className="col col-7">الدورة / الاشتراك</p>
        <p className="col col-5">السعر</p>
      </div>
      <hr />
      {cartItems?.map((item) => (
       
        <Order key={item.id} item={item} />
      ))}
      <hr />
      <div className="row">
        <p className="col col-7">اجمال السعر</p>
        <p className="col col-5">{totalPrice}  جنيها</p>
      </div>
      <hr />
    </section>
  );
}
function Order({ item }) {
  console.log(item)
  return (
    <div className="row Order">
      <p className="col col-7">{item?.course?.title}</p>
      <p className="col col-5">{item?.course?.price} جنيها</p>
    </div>
  );
}
