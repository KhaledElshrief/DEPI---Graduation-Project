/* eslint-disable */
import React, { useState } from 'react';

const ServiceCard = ({ imageSrc, title, description, onClick }) => {
  return (
    <div 
      className="text-center space-y-2 p-4 rounded-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-24 h-24 mx-auto rounded-full shadow-lg"
      />
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AdditionalServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 bg-[#fef0ce] p-10 rounded-lg" >
      <div className="text-center space-y-2">
        <img src="/images/10.webp" alt="Qatar Curriculum" className="w-24 h-24 mx-auto rounded-full" />
        <h4 className="text-xl font-semibold">اشتراك مناهج قطري</h4>
      </div>
      <div className="text-center space-y-2">
        <img src="./images/11.webp" alt="Egypt Curriculum" className="w-24 h-24 mx-auto rounded-full" />
        <h4 className="text-xl font-semibold">اشتراك مناهج مصري</h4>
      </div>
      <div className="text-center space-y-2">
        <img src="/images/8.webp" alt="Home Tutor" className="w-24 h-24 mx-auto rounded-full" />
        <h4 className="text-xl font-semibold">حجز مدرس في المنزل</h4>
        <p className="text-sm text-gray-600">داخل مصر</p>
      </div>
      <div className="text-center space-y-2">
        <img src="/images/mahmoud-khososy.net_.webp" alt="Summer Courses" className="w-24 h-24 mx-auto rounded-full" />
        <h4 className="text-xl font-semibold">دورات الصيف</h4>
        <p className="text-sm text-gray-600">تعليم اللغات - تعليم القرآن الكريم - الرسم - UCMAS</p>
      </div>
      <div className="text-center space-y-2">
        <img src="/images/7.webp" alt="Online Courses" className="w-24 h-24 mx-auto rounded-full" />
        <h4 className="text-xl font-semibold">دورات مسجلة</h4>
      </div>
      <div className="text-center space-y-2">
        <img src="/images/13.webp" alt="Free Courses" className="w-24 h-24 mx-auto rounded-full" />
        <h4 className="text-xl font-semibold">دورات مجانية</h4>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [showStudentServices, setShowStudentServices] = useState(false);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-right">اختر الخدمة</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className='hover:bg-[#dbffe2]'>
            <ServiceCard
              imageSrc="/images/12.webp" 
              title="سنتر"
              description="اشتراك - سياسات"
              onClick={() => setShowStudentServices(false)}
            />
          </div>

          <div className='hover:bg-[#d4f8ff]'>
            <ServiceCard
              imageSrc="/images/teacher.webp" 
              title="مُعلم"
              description="وظائف - دورات تدريبية - سياسات"
              onClick={() => setShowStudentServices(false)}
            />
          </div>

          <div className='hover:bg-[#fef0ce]'>
            <ServiceCard
              imageSrc="/images/61.webp" 
              title="طالب"
              description="دورات - اشتراكات - حجز مدرس"
              onClick={() => setShowStudentServices(true)}
            />
          </div>
        </div>

        {showStudentServices && <AdditionalServices />}
      </div>
    </section>
  );
}