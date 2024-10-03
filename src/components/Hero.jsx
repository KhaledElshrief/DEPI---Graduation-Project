import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-16">
      
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center items-center mb-8 lg:mb-0">
        <div className="relative">
          {/* The background triangle */}
          {/* <div className="absolute top-0 left-0 w-56 h-56 bg-yellow-200 transform rotate-45 -translate-x-16 -translate-y-10"></div> */}
          
          {/* The image */}
          <img 
            src="./images/tablet.jpeg" 
            alt="Person holding a tablet"
            className="relative z-10 rounded-full object-cover w-64 h-64"
          />
        </div>
      </div>
      
      {/* Right Text Section */}
      <div className="lg:w-1/2 w-full text-right">
        {/* Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-yellow-500 mb-4">
          خصوصي دروسك أونلاين
        </h2>
        
        {/* Service List (with RTL direction) */}
        <ul className="text-lg lg:text-xl space-y-2 mb-6" dir="rtl"> {/* Added dir="rtl" */}
          <li className="flex items-center">
            <span className="ml-2 text-green-500">✔</span>
            <span>دورات تعليمية مباشرة أونلاين (مدارس - جامعات)</span>
          </li>
          <li className="flex items-center">
            <span className="ml-2 text-green-500">✔</span>
            <span>دورات مجاناً</span>
          </li>
          <li className="flex items-center">
            <span className="ml-2 text-green-500">✔</span>
            <span>دورات مسجلة أكاديمية</span>
          </li>
          <li className="flex items-center">
            <span className="ml-2 text-green-500">✔</span>
            <span>فريق من المدرسين و الدكاترة</span>
          </li>
          <li className="flex items-center">
            <span className="ml-2 text-green-500">✔</span>
            <span>مراكز تعليمية قريبة</span>
          </li>
          <li className="flex items-center">
            <span className="ml-2 text-green-500">✔</span>
            <span>خدمة عملاء خصوصي معك</span>
          </li>
        </ul>
        
        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full">
            خدمات
          </button>
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full">
            تسجيل دخول
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
