import React from 'react';


const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="text-center space-y-2">
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

const ServicesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8 text-right">اختر الخدمة</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Center Service */}

            <div className='text-center space-y-2 p-4 rounded-lg hover:bg-[#dbffe2] hover:shadow-xl transition duration-300 ease-in-out'>
            <ServiceCard
            imageSrc="/images/12.webp" 
            title="سنتر"
            description="اشتراك - سياسات"
          />
            </div>
          

          {/* Teacher Service */}
          <div className='text-center space-y-2 p-4 rounded-lg hover:bg-[#d4f8ff] hover:shadow-xl transition duration-300 ease-in-out'>
            <ServiceCard
            imageSrc="/images/teacher.webp" 
            title="مُعلم"
            description="وظائف - دورات تدريبية - سياسات"
          />
          </div>
        

          {/* Student Service */}
          <div className='text-center space-y-2 p-4 rounded-lg hover:bg-[#fef0ce] hover:shadow-xl transition duration-300 ease-in-out'>
          <ServiceCard
            imageSrc="/images/61.webp" 
            title="طالب"
            description="دورات - اشتراكات - حجز مدرس"
          />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
