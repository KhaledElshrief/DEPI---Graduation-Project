import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Plus, ShoppingCart, X, Link } from 'lucide-react';
import axios from 'axios';
import { AddToCart, GetLoggedUserCart } from '../Redux/Actions/CartAction';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../Hook/usenotify';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-bootstrap';
import { FaPlugCircleMinus } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const dispatch=useDispatch();
  const cartData=useSelector((state)=>state.cartReducer.cart)
 
  const userCart=useSelector((state)=>state.cartReducer.usercart)
  

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://e-commerce-3-gu5g.onrender.com/getallcourses');
        const data = await response.data.data;
        setCourses(data);
        setFilteredCourses(data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch courses. Please try again later.');
        setIsLoading(false);
      }
    };
    if(cartData){
    
      if(cartData?.status==200){
        notify('تم  الاضافه الى السله', 'success');

      }
      else{
        notify(`${cartData.data.message}`, 'error');
      }
 

      
    }
    dispatch(GetLoggedUserCart)
    fetchCourses();
  }, [cartData]);

const Navigate=useNavigate()

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filtered);
  };
  dispatch(GetLoggedUserCart)
 
  const handleAddCourse = (course) => {
    dispatch(GetLoggedUserCart)
    dispatch(AddToCart(course._id))
   
    
    setCart(prevCart => {
      const courseIndex = prevCart.findIndex(item => item.id === course.id);
      if (courseIndex !== -1) {

        const newCart = [...prevCart];
        newCart[courseIndex].quantity += 1;
        return newCart;
      } else {
        // Add new course to cart
        return [...prevCart, { ...course, quantity: 1 }];

      }
    });
  };

  const handleRemoveCourse = (courseId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== courseId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">جاري التحميل...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }




  return (
    <div className="min-h-screen bg-gray-100 font-sans" dir="rtl">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-right">الدورات</h1>
        
        {/* Search and Filter */}
        <div className="flex justify-between mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="البحث في الدورات"
              className="w-64 px-4 py-2 border rounded-lg pr-10"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          <div className="flex space-x-4 space-x-reverse">
            <button onClick={()=>{
              Navigate("/addcourse")
            }} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">اضافه كورس</button>
            {/* <NavLink to="/add-course">
            <button className="flex items-center bg-green-500 text-white px-2 py-2 rounded-lg hover:bg-green-600">
              <FaPlus className="h-5 w-5" />
              <span className="sr-only">Add Course</span>
            </button>
          </NavLink> */}
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-4 h-4 ml-2" />
              <span>السلة </span>
            </button>
          </div>
        </div>

        {/* Course Grid and Sidebar */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 md:ml-8 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="font-bold text-lg mb-4">المراحل</h2>
              <ul className="space-y-2">
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> كلية صيدلة</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> الجامعة الألمانية GUC</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> ثانوي</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> General</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> دورات تطوير</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> إبتدائي</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> الجامعة البريطانية BUE</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> إعدادي</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> تمريض</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> ثانوي، كيمياء لغات</label></li>
              </ul>

              <h2 className="font-bold text-lg mt-6 mb-4">المستوى</h2>
              <ul className="space-y-2">
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> مبتدئ</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> متوسط</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> متقدم</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> إعدادي 1</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> إعدادي 2</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> إعدادي 3</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> إعدادي 4</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> إعدادي 5</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> إعدادي 6</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> ثانوي 1</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> ثانوي 2</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> ثانوي 3</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> ثانوي 1</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> ثانوي 2</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> ثانوي 3</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> جامعة القاهرة</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> جامعة عين شمس</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> GUC</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> BUE</label></li>
              </ul>

              <h2 className="font-bold text-lg mt-6 mb-4">المدرسين</h2>
              <ul className="space-y-2">
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> أحمد مجدي هشام</label></li>
                <li><label className="flex items-center"><input type="checkbox" className="ml-2" /> aatta</label></li>
              </ul>

              <h2 className="font-bold text-lg mt-6 mb-4">السعر</h2>
              <div className="flex items-center justify-between">
                <input type="text" placeholder="إلى" className="w-20 px-2 py-1 border rounded text-right" />
                <span className="mx-2">-</span>
                <input type="text" placeholder="من" className="w-20 px-2 py-1 border rounded text-right" />
              </div>
              <button className="w-full bg-yellow-500 text-white py-2 rounded-lg mt-4">أظهر النتائج</button>
            </div>
          </div>

          {/* Course Grid */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-right">{course.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="flex items-center">
                      <span className="mr-1">{course.level} المستوى </span>
                     
                    </span>
                    <span className="flex items-center">
                      {course.instructor}
                    
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <button 
                      onClick={() => handleAddCourse(course)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center"
                      aria-label={`Add ${course.title} to cart`}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      إضافة
                    </button>
                    <div className="text-lg font-bold text-yellow-500 text-right">{course.price} EGP</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-yellow-500 text-white px-8 py-2 rounded-lg">المزيد</button>
        </div>

        {/* Cart Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">السلة</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              {cart.length === 0 ? (
                <p>السلة فارغة</p>
              ) : (
                <>
                  {userCart?.data?.data?.cartItems.map(item => (
                    
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      
                    
                    
                    </div>
                  ))}
                  <div className="mt-4 text-xl font-bold">
                    الإجمالي: {getTotalPrice()} EGP
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg mt-4">
                    إتمام   الشراء
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </main>
      <ToastContainer />
    </div>
  );
};

export default CoursesPage;