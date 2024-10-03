import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'; 
/* eslint-disable */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 text-right rtl">
        
  {/* Section 3: Student Service */}
  <div>
          <h3 className="text-xl font-semibold mb-4 text-white">خدمة الطلاب</h3>
          <p className="text-lg font-medium">01008264260</p>
        </div>
        {/* Section 2: Teacher Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">خدمة المدرسين</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">شروط الاستخدام</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">شروط الاستخدام للمعلمين و الشركاء</a>
            </li>
          </ul>
        </div>

      

        {/* Section 4: Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">تواصل معنا</h3>
          <div className="space-y-2">
            <p className="leading-relaxed">القاهرة، مصر</p>
            <p className="text-lg font-medium">01008264260</p>
            <p>
              <a href="mailto:info@khososy.net" className="text-gray-400 hover:text-white transition-colors duration-200">info@khososy.net</a>
            </p>
          </div>
        </div>
        {/* Section 1: About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">عن خصوصى</h3>
          <p className="leading-relaxed">
            خصوصى هي أكاديمية تعليمية أونلاين في مختلف المراحل و المجالات.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-right">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <FaWhatsapp className="text-xl text-gray-400 hover:text-green-400 transition-colors duration-200" />
          <FaInstagram className="text-xl text-gray-400 hover:text-pink-400 transition-colors duration-200" />
          <FaFacebook className="text-xl text-gray-400 hover:text-blue-500 transition-colors duration-200" />
        </div>

        {/* Footer Copyright */}
        <p className="text-gray-500 text-sm">
          © 2023 جميع الحقوق محفوظة لدى خصوصي أكاديمي
        </p>
      </div>
    </footer>
  );
};

export default Footer;
