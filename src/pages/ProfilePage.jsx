import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaEnvelope, FaSpinner } from 'react-icons/fa';
import { fetchUserProfile } from '../Redux/Actions/AuthAction'; 
import { data } from 'autoprefixer';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
 

  useEffect(()=>{
    dispatch(fetchUserProfile)
  },[])
  const data=useSelector((state)=>state.authReducer.loggeduser)
  
 console.log(data.data)

//   useEffect(() => {
//     // dispatch(fetchUserProfile());
//   }, [dispatch]);

//   useEffect(() => {
//     if (user) {
//       setEditedUser(user);
//     }
//   }, [user]);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {

//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <FaSpinner className="animate-spin text-4xl text-primary" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-500 p-4">
//         An error occurred: {error}
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="text-center p-4">
//         No user data available. Please log in.
//       </div>
//     );
//   }

  return (
    <div className="container mx-auto p-4" dir="rtl">
      {/* <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">الملف الشخصي</h1>
        <div className="flex flex-col items-center mb-6">
          {user.photo ? (
            <img
              src={user.photo}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <FaUser className="text-4xl text-gray-400" />
            </div>
          )}
          {isEditing ? (
            <input
              type="file"
              className="mb-4"
              onChange={(e) => {
                // Handle file upload logic here
                console.log('File selected:', e.target.files[0]);
              }}
            />
          ) : null}
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <FaUser className="text-gray-400 mr-2" />
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedUser.name || ''}
                // onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <span>{user.name}</span>
            )}
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-gray-400 mr-2" />
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedUser.email || ''}
                // onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <span>{user.email}</span>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          {isEditing ? (
            <button
            //   onClick={handleSave}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
            >
              حفظ التغييرات
            </button>
          ) : (
            <button
            //   onClick={handleEdit}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
            >
              تعديل الملف الشخصي
            </button>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default ProfilePage;