import React from 'react';

const services = [
  {
    id: 1,
    title: 'أماكن تعليمية',
    description: 'تقدر تتعرف على أماكن تعليمية و تستفيد بخصم خصوصي.',
    buttonText: 'أماكن تعليمية',
    icon: '/images/sheet2.webp',
    route: '/locations',
  },
  {
    id: 2,
    title: 'مدرسين خصوصي',
    description: 'تعرف على أفضل مدرسين من خصوصي في مختلف المراحل و المواد و احجز مع مدرسك.',
    buttonText: 'مدرسين',
    icon: '/images/sheet.png',
    route: '/',
  },
  {
    id: 3,
    title: 'دورات مسجلة',
    description: 'ادخل و تصفح دورات خصوصي المجانية و المدفوعة في مختلف المواد الدراسية.',
    buttonText: 'دورات خصوصي',
    icon: '/images/headphone.webp',
    route: '/courses',
  },
  {
    id: 4,
    title: 'اشتراك شهري لايف',
    description: 'اشترك شهرياً من 1 ابتدائي إلى 3 ثانوي مع مدرسين خصوصي.',
    buttonText: 'اشتراك شهري',
    icon: '/images/zoom.webp',
    route: '/Subscribe',
  },
];

function Services() {
  return (
    <section className="bg-gray-100 py-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-8">خدمات خصوصي</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-yellow-400 text-right rounded-lg p-6 shadow-md flex flex-col justify-between">
              <div className="flex flex-col items-center mb-4">
                {/* Icon */}
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-12 h-12 mb-2"
                />
                
                {/* Title */}
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-lg mb-6">{service.description}</p>

              {/* Button */}
              <div className="mt-auto">
                <a href={service.route} className="block">
                  <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 w-full transition duration-300 ease-in-out">
                    {service.buttonText}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;