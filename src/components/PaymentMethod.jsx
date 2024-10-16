import React from "react";
import paym from "../images/paywf.png";
export default function PaymentMethod() {
  return (
    <section className="PaymentMethod">
      <h2>طريقة الدفع</h2>
      <input type="radio" name="option" id="one" />
      <label htmlFor="one"> الدفع عن طريق محافظ المحمول</label>
      <br />
      <p>(فودافون كاش – اتصالات كاش – أورانج كاش) على رقم 01097735280</p>
      <input type="radio" name="option" id="two" />
      <label htmlFor="two">
        <img src={paym} alt="" width="300px" />
      </label>
      <br />
      <input type="radio" name="option" id="three" />
      <label htmlFor="three"> تم الدفع فى السنتر</label>
      <br />
      <input type="checkbox" name="four" id="four" />
      <label htmlFor="four">
        لقد قرأتُ الشروط والأحكام وأوافق عليها لهذا الموقع *
      </label>
      <br />
      <button className="btn btn-warning">تأكيد الطلب</button>
    </section>
  );
}
