import React from "react";
import payment from "../images/Organic-content-FB-2-e1700227091823.webp";

export default function SubPlans() {
  return (
    <div>
      <h2 className="text-center">خطط الاسعار</h2>
      <div className="plans row gap-4">
        <div className="plan shadow-lg">
          <div className="text-center bg-warning plan-head p-2">
            <div className="fw-bold">اشتراك شهرى</div>
            <p className="ll">يتم الدفع بعد 3 اشهر مجانية</p>
          </div>
          <div className="plan-body">
            <div className="price mb-4">
              <span className="tag">EGP</span>
              <span className="p">200</span>
              <p>شهرياً</p>
            </div>
            <ul className="mb-3 p-4">
              <li> 3 اشهر مجانية</li>
              <hr />
              <li> بروفايل على الموقع</li>
              <hr />
              <li> التواجد على صفحة خصوصى Facebook - Instagram</li>
              <hr />
              <li> تحميل محاضرات على الموقع (بنظام النسبة أو الدفع الثابت)</li>
            </ul>
            <p
              className="btn btn-warning mb-2"
              onClick={() => window.scrollTo({ top: 2900, behavior: "smooth" })}
            >
              الاشتراك
            </p>
            <p className="ll">جميع وسائل الدفع مدعومة و يوجد خدمة عملاء 24/7</p>
          </div>
        </div>
        <div className="plan shadow-lg">
          <div className="patch">أفضل خطة</div>
          <div className="text-center bg-warning plan-head p-2">
            <div className="fw-bold">اشتراك سنوي</div>
            <p className="ll">2000 جنيهاً / سنة</p>
          </div>
          <div className="plan-body">
            <div className="price mb-4">
              <span className="tag">EGP</span>
              <span className="p">166</span>
              <p>شهرياً</p>
            </div>
            <ul className="mb-3 p-4">
              <li> 3 اشهر مجانية</li>
              <hr />
              <li> بروفايل على الموقع</li>
              <hr />
              <li> التواجد على صفحة خصوصى Facebook - Instagram</li>
              <hr />
              <li> إعلانات مدفوعة (الاشتراك شامل الإعلانات)</li>
              <hr />
              <li> 100كارت QR code مطبوع بالألوان</li>
              <hr />
              <li> تحميل محاضرات على الموقع (بنظام النسبة أو الدفع الثابت)</li>
            </ul>
            <p
              className="btn btn-warning mb-2"
              onClick={() => window.scrollTo({ top: 2900, behavior: "smooth" })}
            >
              الاشتراك
            </p>
            <p className="ll">جميع وسائل الدفع مدعومة و يوجد خدمة عملاء 24/7</p>
          </div>
        </div>
        <div className="plan shadow-lg">
          <div className="text-center bg-warning plan-head p-2">
            <div className="fw-bold">اشتراك شهرى</div>
            <p className="ll">لمدة 3 أشهر فقط</p>
          </div>
          <div className="plan-body">
            <div className="price mb-4">
              <span className="tag">EGP</span>
              <span className="p">0</span>
              <p>شهرياً</p>
            </div>
            <ul className="mb-3 p-4">
              <li> 3 اشهر مجانية</li>
              <hr />
              <li> بروفايل على الموقع</li>
              <hr />
              <li> التواجد على صفحة خصوصى Facebook - Instagram</li>
              <hr />
              <li> تحميل محاضرات على الموقع (بنظام النسبة أو الدفع الثابت)</li>
            </ul>
            <p
              className="btn btn-warning mb-2"
              onClick={() => window.scrollTo({ top: 2900, behavior: "smooth" })}
            >
              الاشتراك
            </p>
            <p className="ll">جميع وسائل الدفع مدعومة و يوجد خدمة عملاء 24/7</p>
          </div>
        </div>
        <div className="payM" id="ss">
          <p className="ll">جميع وسائل الدفع متاحة</p>
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
}
