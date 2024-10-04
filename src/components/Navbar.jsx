/* eslint-disable */
import React from "react";
import "../App";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-lg font-bold">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>

        {/* Right Side: Menu in Arabic */}
        <ul className="flex space-x-6 text-gray-700 text-sm">
          <li className="hover:text-black cursor-pointer">حسابي</li>
          <li className="hover:text-black cursor-pointer">مين خصوصي؟</li>
          <li className="hover:text-black cursor-pointer">
            <NavLink to={"/Subscribe"}>الإشتراك كستنر</NavLink>
          </li>
          <li className="hover:text-black cursor-pointer">
            <NavLink to={"/WorkAsTeacher"}>العمل كمعلم</NavLink>
          </li>
          {/* Dropdown for الطلاب */}
          <li className="relative group hover:text-black cursor-pointer ">
            للطلاب
            {/* Dropdown menu */}
            <ul className="absolute hidden group-hover:block right-0 mt-[-2] w-48 bg-white shadow-lg border border-gray-200 z-10 rounded-lg ">
              <li className="px-4 py-2 hover:bg-gray-100">كورسات مسجلة</li>
              <li className="px-4 py-2 hover:bg-gray-100">النظام المصري</li>
              <li className="px-4 py-2 hover:bg-gray-100">النظام القطري</li>
              <li className="px-4 py-2 hover:bg-gray-100">أماكن تعليمية</li>
              <li className="px-4 py-2 hover:bg-gray-100">مدونة خصوصي</li>
            </ul>
          </li>

          <li className="hover:text-black cursor-pointer">
            <NavLink to={"/"}>الرئيسية</NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <img className="w-150 h-10   " src="./images/logo.png" />
          {/* <span className="text-red-600 text-xl font-bold">KHOSOSY</span>
          <span className="text-orange-500 text-xl font-bold">.net</span> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
