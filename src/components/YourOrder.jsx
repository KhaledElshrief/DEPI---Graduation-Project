import React from "react";

export default function YourOrder() {
  return (
    <section className="YourOrder text-center">
      <h2 className="mb-5">طلبك</h2>
      <hr />
      <div className="row">
        <p className="col col-7">الدورة / الاشتراك</p>
        <p className="col col-5">السعر</p>
      </div>
      <hr />
      <Order />
      <Order />
      <Order />
      <hr />
      <div className="row">
        <p className="col col-7">اجمال السعر</p>
        <p className="col col-5">1000 جنيها</p>
      </div>
      <hr />
    </section>
  );
}
function Order() {
  return (
    <div className="row Order">
      <p className="col col-7">منتج جامد فشخ</p>
      <p className="col col-5">300 جنيها</p>
    </div>
  );
}
