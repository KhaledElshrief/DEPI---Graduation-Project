import React from "react";

export default function TeachingSystems() {
  return (
    <section className="two container-md">
      <h2>أنظمة التدريس على خصوصى</h2>
      <div className="system d-flex">
        <div className="right">
          <h5>التدريس أونلاين مباشر</h5>
          <p>✔️ التدريس بشكل لايف (مباشر) مع الطالب / الطلاب عن طريق زووم</p>
          <p>✔️ التدريس يكون تحت إشراف إدارة خصوصى</p>
          <p>
            ✔️ إستلام المرتب بشكل شهرى مع ملف بعدد الحصص و عدد الطلاب فى حصة
          </p>
          <a
            className="btn btn-warning mt-3"
            href="https://api.whatsapp.com/message/5FXKZ6GH4DCSF1?autoload=1&app_absent=0"
          >
            الإشتراك عن طريق الواتس اب
          </a>
        </div>
        <div className="right" id="a">
          <h5>دورات مسجلة على الموقع</h5>
          <p>✔️ مشاهدة دورة إزاى أكون مدرس على خصوصى</p>
          <p>✔️ تحميل الدورة</p>
          <p>✔️ يتم الموافقة عليها</p>
          <p>✔️ متابعة مبيعات الدورة مع الإدارة</p>
          <a className="btn btn-warning mt-3" href="#">
            تسجيل دخول
          </a>
        </div>
      </div>
      <p>لمعرفة الشروط العمل كمعلم برجاء قراءة أتفاقية المعلمين و الشركاء</p>
      <p
        className="last mb-5"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        أتفاقية المعلمين و الشركاء
      </p>
    </section>
  );
}
