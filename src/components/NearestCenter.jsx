import React from 'react';

const NearestCenter = () => {
  return (
    <section className="py-20 bg-white ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/nerestcenter.jpeg"
            alt="Nearest Center Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            تقدر تعرف السنتر الأقرب ليك
          </h2>
          <p className="text-gray-600 mb-6">
            تقدر تتعرف على المراكز التعليمية الأقرب ليك و تحجز معاه و تعرف جميع الخصومات من بيتك.
          </p>
          {/* Call to Action Button */}
          <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 flex justify-center items-center">
            تصفح المراكز التعليمية
          </button>
        </div>
      </div>
    </section>
  );
};

export default NearestCenter;
