import React from "react";
import feat1 from "../images/12.webp";
import feat2 from "../images/13.webp";
import feat3 from "../images/Organic-content-FB.webp";
import feat4 from "../images/15.webp";

export default function SubFeatures() {
  return (
    <div className="sub-features" id="features">
      <h2 className="text-center">مميزات الاشتراك كسنتر معانا</h2>
      <div className="features row ">
        <div className="feat">
          <img src={feat1} alt="" />
          <h3>بروفايل</h3>
          <p>
            تحميل محتوى تعليمي على الموقع و بيعه لصالح السنتر. شامل تأمين
            الفيديو ضد السرقة و التحميل
          </p>
        </div>
        <div className="feat">
          <img src={feat2} alt="" />
          <h3>محتوى تعليميى</h3>
          <p>
            يشمل جميع تفاصيل السنتر من خدامات السنتر و صور و الموقع الجغرافى
            للسنتر. سوف يجد الطلاب السنتر بسهولة على الانترنت.
          </p>
        </div>
        <div className="feat">
          <img src={feat3} alt="" />
          <h3>اعلانات فيسبوك</h3>
          <p>
            هتكون موجود فى منشوراتنا و اعلاناتنا المدفوعة على الصفحة و اعلانات
            جوجل المدفوعة.
          </p>
        </div>
        <div className="feat">
          <img src={feat4} alt="" />
          <h3>Scan me cards</h3>
          <p>
            100 كارت هدية باستخدام QR code لتوجيه الطلاب لصفحة السنتر على
            الموقع.
          </p>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/message/UWRESDZHCVGMK1?autoload=1&app_absent=0"
        className="btn btn-warning mt-3"
      >
        للأستفسار
      </a>
    </div>
  );
}
