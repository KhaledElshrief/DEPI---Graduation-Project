import React, { useState } from "react";

const KhososyServices = () => {
  const [activeTab, setActiveTab] = useState("individuals");

  return (
    <div className="container mx-auto pt-0 mt-0 py-10 px-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
        خدمات خصوصى التعليمية؟
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          className={`py-2 px-4 font-semibold ${activeTab === "individuals" ? "bg-yellow-500 text-white" : "text-gray-900"} border border-yellow-500 rounded-l-lg`}
          onClick={() => setActiveTab("individuals")}
        >
          خدمات الأفراد
        </button>
        <button
          className={`py-2 px-4 font-semibold ${activeTab === "institutions" ? "bg-yellow-500 text-white" : "text-gray-900"} border border-yellow-500`}
          onClick={() => setActiveTab("institutions")}
        >
          خدمات المؤسسات
        </button>
        <button
          className={`py-2 px-4 font-semibold ${activeTab === "contact" ? "bg-yellow-500 text-white" : "text-gray-900"} border border-yellow-500 rounded-r-lg`}
          onClick={() => setActiveTab("contact")}
        >
          تواصل معنا
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        {activeTab === "individuals" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              خدمات المدرسين و المشرفين:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                تستطيع الإنضمام لفريق خصوصى كمعلم خاص بطريقة الإشتراك الشهري.
              </li>
              <li>
                رفع المحتوى التعليمى على منصة خصوصى و الربح عن طريق بيع
                المحاضرات سواء مراحل دراسية (مثل الصف الرابع الإبتدائى – مراحل
                جامعية أو دورات حرة).
              </li>
              <li>
                إدارة طلاب المدرس (المشتركين فى فريق خصوصى) مجاناً بدون رسوم و
                إستلام المدفوعات و تحويل المدفوعات إلى المعلم.
              </li>
              <li>
                توفير فرصة ربح عن طريق التوصيلات المشرفين و المسوقين فى المجال
                التعليمى.
              </li>
            </ul>
          </div>
        )}
        {activeTab === "institutions" && (
          <div>
            <p className="text-lg text-gray-700">
              هنا يمكنك عرض خدمات المؤسسات مثل التعليم الجامعي أو الخدمات
              التعليمية الكبرى.
            </p>
          </div>
        )}
        {activeTab === "contact" && (
          <div>
            <p className="text-lg text-gray-700">
              إذا كان لديك أي استفسارات، لا تتردد في التواصل معنا عبر البريد
              الإلكتروني أو الهاتف.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KhososyServices;
