import { Link } from 'lucide-react';
import React from 'react';

const Courses = () => {
  return (
    <section className="bg-[#f9f2e7] py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/pharmacy.jpeg" 
            alt="Pharmacy Courses"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            دورات صيدلة فى جميع المواد
          </h2>
          <p className="text-gray-600 mb-4">
            دورات كليات صيدلة فى مصر.
          </p>
          <p className="text-gray-600 mb-4">
            الجامعة البريطانية – الجامعة الألمانية – جامعة هيرتفوردشاير....إلخ
          </p>
          <p className="text-gray-600 mb-6">
            دورات جميع المواد و أمتحانات و بنك أسئلة.
          </p>
          {/* Call to Action Button */}
          <Link to="/locations">
            <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 flex justify-center items-center">
              تصفح الدورات
            </button>
          </Link>
         
        </div>
      </div>
    </section>
  );
};

export default Courses;
