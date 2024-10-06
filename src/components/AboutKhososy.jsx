import React from "react";

const AboutKhososy = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Column: Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="./images/Original-of-Facebook-standard-design-1-1.webp"
            alt="Khososy Student"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column: Text */}
        <div className="md:w-1/2 md:pl-8 text-right">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">مين خصوصى؟</h2>
          <p className="text-lg text-gray-700 mb-6">
            خصوصى أكاديمى هى مؤسسة رقمية مختصة فى التعليم عن بعد فى المجال
            الدراسى
          </p>

          <ul className=" list-inside text-gray-700 space-y-2 text-right rtl-list">
            
            <li>من الصف الرابع الإبتدائى إلى الصف الثانى الثانوى<span className="ml-2  text-gray-700">✔</span></li>
            <li>المراحل الجامعية لمختلف الجامعات و الكليات<span className="ml-2  text-gray-700">✔</span></li>
            <li>مجال العمل الحر<span className="ml-2  text-gray-700">✔</span></li>
          </ul>

          <p className="text-lg text-gray-700 mt-6">
            فريق خصوصى يعمل على تقديم أفضل خدمة تعليمية للطالب فى مختلف
            المجالات. هدفنا هو التقدم و تغيير طرق التعليم بوسائل حديثة و تحفيز
            الطالب بالمسابقات و الجوائز.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutKhososy;
