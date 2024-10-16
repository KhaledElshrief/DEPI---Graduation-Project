import React from 'react';

const JoinUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/joinus.jpeg" 
            alt="Join Us"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">انضم إلى مدرسى خصوصي</h2>
          <p className="text-gray-600 mb-4">
            املأ الابليكشن و هيتواصل معاك فريق خصوصي.
          </p>
          <p className="text-gray-600 mb-6">
            هتقدر تدرس أونلاين أو اوفلاين حسب اختيارك و تقدر تستفيد من منصة خصوصي
            و تسجيل دورات معانا.
          </p>
          {/* Call to Action Button */}
          <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 flex justify-center items-center">
            انضم إلينا!
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
