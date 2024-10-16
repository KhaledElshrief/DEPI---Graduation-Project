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
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/AuthAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false);

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

  return (
    <nav className="w-full bg-white shadow-lg font-bold" dir="rtl"> {/* Add RTL direction */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-4 px-6">
        {/* Logo */}
        <NavLink to={"/"}>
        <div className="flex items-center">
          <img className="w-32 h-8" src="./images/logo.png" alt="logo" />
        </div>

        </NavLink>
       

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:space-x-6 text-gray-700 text-sm flex-col lg:flex-row items-end lg:items-center mt-4 lg:mt-0"> {/* Adjusted item alignment */}
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0 ml-8">
              <NavLink to={"/"}>الرئيسية</NavLink>
            </li>
            <li className="relative group hover:text-black cursor-pointer mb-2 lg:mb-0">
              <button onClick={toggleStudentDropdown} className="flex items-center">
                للطلاب
                {/* <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg> */}
              </button>
              {/* Dropdown menu */}
              <ul className={`lg:absolute ${isStudentDropdownOpen ? 'block' : 'hidden'} lg:hidden lg:group-hover:block left-0 mt-0 w-48 bg-white shadow-lg border border-gray-200 z-10 rounded-lg`}> {/* Changed right to left for RTL */}
                <NavLink to={"/courses"}><li className="px-4 py-2 hover:bg-gray-100">كورسات مسجلة</li></NavLink>
                <NavLink to={"/For_students"}><li className="px-4 py-2 hover:bg-gray-100">النظام المصري</li></NavLink>
                <NavLink to={"/Qatar"}><li className="px-4 py-2 hover:bg-gray-100">النظام القطري</li></NavLink>
                <li className="px-4 py-2 hover:bg-gray-100">أماكن تعليمية</li>
                <NavLink to={"/Blog"}><li className="px-4 py-2 hover:bg-gray-100">مدونة خصوصي</li></NavLink>
              </ul>
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              <NavLink to={"/WorkAsTeacher"}>العمل كمعلم</NavLink>
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              <NavLink to={"/Subscribe"}>الإشتراك كستنر</NavLink>
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              <NavLink to={"/whokhososy"}>مين خصوصى؟</NavLink>
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              {data?.status == 200 ? (
                <Button onClick={handleLogout}>تسجيل خروج</Button>
              ) : (
                <NavLink to={"/Account"}>حسابي</NavLink>
              )}
            </li>
            <li className="hover:text-black cursor-pointer mb-2 lg:mb-0">
              <NavLink to={"/Cart"}>
                <FaShoppingCart />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="hidden lg:flex space-x-4 mt-4 lg:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 ">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 ">
            <FaInstagram className="w-5 h-5 mr-3" />
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
