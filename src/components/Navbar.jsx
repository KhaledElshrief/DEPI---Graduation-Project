import React, { useEffect, useState } from "react";
import "../App";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUser,
  FaChevronDown,
  FaPlug,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/AuthAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoad(true);
    dispatch(logout);
    setToken("");
    setLoad(false);
  };

  const data = useSelector((state) => state.authReducer.loginuser);

  useEffect(() => {}, [load]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleStudentDropdown = () => {
    setIsStudentDropdownOpen(!isStudentDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="w-full bg-white shadow-lg font-bold" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        <NavLink to="/" className="flex items-center">
          <img className="w-32 h-8" src="./images/logo.png" alt="logo" />
        </NavLink>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:space-x-6 text-gray-700 text-sm flex-col lg:flex-row items-end lg:items-center mt-4 lg:mt-0">
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0 ml-8">
              <NavLink to="/">الرئيسية</NavLink>
            </li>
            <li className="relative group hover:text-black cursor-pointer mb-2 lg:mb-0">
              <button onClick={toggleStudentDropdown} className="flex items-center">
                للطلاب
                <FaChevronDown className="h-4 w-4 mr-1" />
              </button>
              <ul className={`lg:absolute ${isStudentDropdownOpen ? 'block' : 'hidden'} lg:hidden lg:group-hover:block left-0 mt-0 w-48 bg-white shadow-lg border border-gray-200 z-10 rounded-lg`}>
                <NavLink to="/courses"><li className="px-4 py-2 hover:bg-gray-100">كورسات مسجلة</li></NavLink>
                <NavLink to="/For_students"><li className="px-4 py-2 hover:bg-gray-100">النظام المصري</li></NavLink>
                <NavLink to="/Qatar"><li className="px-4 py-2 hover:bg-gray-100">النظام القطري</li></NavLink>
                <li className="px-4 py-2 hover:bg-gray-100">أماكن تعليمية</li>
                <NavLink to="/Blog"><li className="px-4 py-2 hover:bg-gray-100">مدونة خصوصي</li></NavLink>
              </ul>
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              <NavLink to="/WorkAsTeacher">العمل كمعلم</NavLink>
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              <NavLink to="/Subscribe">الإشتراك كستنر</NavLink>
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              <NavLink to="/whokhososy">مين خصوصى؟</NavLink>
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
            {data?.status === 200 || localStorage.getItem("token") ? (
        <div className="relative">



          <button onClick={toggleProfileDropdown} className="flex items-center">
            <FaUser className="h-5 w-5" />
            <span className="sr-only">User profile</span>
          </button>
          <ul
            className={`absolute ${isProfileDropdownOpen ? 'block' : 'hidden'} right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-10 rounded-lg`}
          >
            <NavLink to="/profile">
              <li className="px-4 py-2 hover:bg-gray-100">الملف الشخصي</li>
            </NavLink>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout}
            >
              تسجيل خروج
            </li>
          </ul>
        
        </div>
      ) : (
        <NavLink to="/Account">حسابي</NavLink>
      )}
            </li>
            { 
            data?.status === 200 ||localStorage.getItem("token") ?( <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              <NavLink to="/Cart">
                <FaShoppingCart className="h-5 w-5" />
              </NavLink>
            </li>):null
               
            }
          
          </ul>
        </div>

        <div className="hidden lg:flex space-x-4 mt-4 lg:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 mr-3">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-700">
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;