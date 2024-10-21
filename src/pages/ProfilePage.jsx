import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../Redux/Actions/AuthAction'; 

const Profile = () => {
  // Get the logged-in user data from the Redux store
  const userData = useSelector((state) => state.authReducer.loggeduser);
  const [user,setuser]=useState('')
  

 const dispatch = useDispatch();
 console.log(user)

  useEffect(()=>{
    dispatch(fetchUserProfile)
    if(userData){
        setuser(userData?.data.data[0])
    }
 
  },[userData])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex flex-col items-center">
          {/* Display user profile image */}
          {user.profileImage ? (
            <img 
              src={user.profileImage} 
              alt="User Profile" 
              className="w-24 h-24 rounded-full mb-4"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          )}

          {/* Display user name */}
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>

          {/* Display user email */}
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;