import React from "react";

export default function WTabout() {
  return (
    <main className="container">
      <h2 className="text-center teacher-head">
        العمل <span className="text-warning">كمعلم</span>
      </h2>
      <div className="content d-flex flex-column-reverse flex-md-row justify-content-around align-items-md-start ">
        <div className="left">
          <iframe
            width="100%"
            height="398"
            src="https://www.youtube.com/embed/0u9gc_26pSI"
            title="تدريب للمعلمين للتدريس أونلاين (إزاى ادرس أونلاين؟) جزء 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="right">
          <p>
            عاوز تشتغل من البيت أونلاين و يكون ليك مصدر دخل كمدرس أضافى و تقدر
            تسجل محاضراتك و تكون موجودهل بشكل موأمن على الموقع و تتابع مبيعاتك.{" "}
            <br />
            <br />
            خصوصى.نت بتقدملك كمدرس كل الوسائل للوصول لجمهورك من الطلاب فى مختلف
            المراحل و فريق خصوصى يقدر يساعد فى كل خطوة. فى خصوصى هدفنا توفير
            البيئة التعليمية المناسبة للملعم و الطالب. <br />
            <br />
            أحنا بنوفر للمدرس وسائل مساعدات من أول الدورات المجانية للمدرس إلى
            التسويق و العمل على كيفية تقديم المحتوى للطالب.
          </p>
        </div>
      </div>
    </main>
  );
}
