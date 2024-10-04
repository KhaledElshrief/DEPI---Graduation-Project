import React from "react";

export default function SubInfo() {
  return (
    <div className="p-3 sub-info col-12 col-lg-8">
      <h1 className="fw-bolder fst-italic mb-4">
        <span className="text-warning">افتح للسنتر</span> فرع أونلاين
      </h1>
      <h5>خصوصى هو موقع تعليمى شامل لجميع الطلاب.</h5>
      <p>
        هدفنا هو مساعدتك فى نشر مكانك على الانترنت و خلق تواجد فعال على شبكات
        التواصل الإجتماعى و توفير كافة الخدمات الدعائية.
      </p>
      <p className="text-warning fw-bolder yyy fst-italic">
        لن تحتاج بعد الآن إلى ميزانية تسويق ضخمة
      </p>
      <p
        className="btn btn-warning mt-3 fw-bold koko mb-5"
        onClick={() => window.scrollTo({ top: 1300, behavior: "smooth" })}
      >
        مميزات الاشتراك
      </p>
    </div>
  );
}
