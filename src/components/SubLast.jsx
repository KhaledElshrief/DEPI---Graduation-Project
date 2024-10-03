import React from "react";
import background from "../images/Organic-content-FB-1.jpg";
export default function SubLast() {
  return (
    <div className="row">
      <div className="partOne col-6 p-1">
        <h2>بيع محاضراتك</h2>
        <p>
          سجل كمدرس أو سنتر و ارفع محتوى السنتر على الموقع و احصل على خدمات
          التأمين ضد سرقة المحتوى و حقوق ملكية المحتوى.
        </p>
        <a
          href="https://api.whatsapp.com/message/UWRESDZHCVGMK1?autoload=1&app_absent=0"
          className="btn btn-warning mt-5"
        >
          تواصل معانا
        </a>
      </div>
      <div className="partTwo col-6">
        <h2>تواجد على صفحتنا</h2>
        <iframe
          src="https://www.facebook.com/v2.10/plugins/page.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df967c87bb2750334c%26domain%3Dkhososy.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fkhososy.net%252Ffb52959f6742ca7e8%26relation%3Dparent.parent&container_width=506&height=300&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Fkhososy.net%2F&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width=500px"
          title="page"
        ></iframe>
      </div>
    </div>
  );
}
