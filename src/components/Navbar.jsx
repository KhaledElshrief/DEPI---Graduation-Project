/* eslint-disable */
import React, { useEffect, useState } from "react";
import "../App";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/AuthAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoad(true);
    dispatch(logout);
    setToken("");
    setLoad(false);
  };

  const data = useSelector((state) => state.authReducer.loginuser);

  useEffect(() => {}, [load]);

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
          <li className="hover:text-black cursor-pointer fs-5">
            <NavLink to={"/Cart"}>
              <FaShoppingCart />
            </NavLink>
          </li>
          <li className="hover:text-black cursor-pointer">
            {data?.status == 200 ? (
              <Button onClick={handleLogout}>تسجيل خروج</Button>
            ) : (
              <NavLink to={"/Account"}>حسابي</NavLink>
            )}
          </li>
          <li className="hover:text-black cursor-pointer">
            <NavLink to={"/whokhososy"}>مين خصوصى؟</NavLink>
          </li>
          <li className="hover:text-black cursor-pointer">
            <NavLink to={"/Subscribe"}>الإشتراك كستنر</NavLink>
          </li>
          <li className="hover:text-black cursor-pointer">
            <NavLink to={"/WorkAsTeacher"}>العمل كمعلم</NavLink>
          </li>
          {/* Dropdown for الطلاب */}
          <li className="relative group hover:text-black cursor-pointer">
            للطلاب
            {/* Dropdown menu */}
            <ul className="absolute hidden group-hover:block right-0 mt-[-2] w-48 bg-white shadow-lg border border-gray-200 z-10 rounded-lg">
              <NavLink to={"/courses"}>
                <li className="px-4 py-2 hover:bg-gray-100">كورسات مسجلة</li>
              </NavLink>

              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to={"/For_students"}>النظام المصري</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to={"/Qatar"}>النظام القطري</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">أماكن تعليمية</li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to={"/Blog"}>مدونة خصوصي</NavLink>
              </li>
            </ul>
          </li>

          <li className="hover:text-black cursor-pointer">
            <NavLink to={"/"}>الرئيسية</NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <img className="w-150 h-10" src="./images/logo.png" alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
