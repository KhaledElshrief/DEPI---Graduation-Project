// مدونة خصوصي 
import React from 'react'
import { NavLink } from 'react-router-dom';
const BlogCards = (props) => {
    const {imageUrl} = props;
  return (
    <>
        <div className="card w-32 md:w-40 xl:w-64 rounded-lg shadow-md transition duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:overflow-hidden hover:rounded-lg">
                <img className="image w-full h-auto transition duration-500 ease-in-out hover:filter-brightness-100 hover:shadow-xl rounded-t-lg filter-brightness-80" src={imageUrl} alt="" />
                <div className="card-content p-4  mt-4">
                    {/* props.title */}
                  <NavLink to={props.path}> <h3 className='text-xl md:text-2xl mb-6'><a className=' hover:text-yellow-400 transition duration-500 ease-in-out' href="/">{props.title}</a></h3> </NavLink> 
                    {/* props.content */}
                    <p>{props.content}</p>
                  <NavLink to={props.path}>  <a className="read-more uppercase text-xs font-bold  mb-4 inline-block hover:text-yellow-400 transition duration-500 ease-in-out" href="/">Read More »</a> </NavLink>
                </div>
                <div className="p-4 md:p-6 border-t border-white">
                    {/* props.date */}
                    <span className='text-xs text-gray-600'>{props.date}</span>
                    {/* props.comment */}
                    <span className="dot text-xs text-gray-600">{props.comment}</span>
                </div>
            </div>
    </>
  )
}

export default BlogCards