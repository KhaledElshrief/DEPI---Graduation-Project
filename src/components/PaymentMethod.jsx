import React from "react";
import paym from "../images/paywf.png";
import axios from "axios";
import notify from "../Hook/usenotify";
import { ToastContainer } from "react-toastify";
export default function PaymentMethod() {
    const handelSubmit=async()=>{
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      try{
          const res=await axios.post(`https://e-commerce-3-gu5g.onrender.com/order`,{},config)
          if(res.status==200){
            notify("تم عمل الاوردر ","success")
          }
          console.log(res)
      }
      catch(e){
        console.log(e)

      }
    }

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
      <button className="btn btn-warning" onClick={handelSubmit}>تأكيد الطلب</button>
      <ToastContainer />
    </section>
  );
}
