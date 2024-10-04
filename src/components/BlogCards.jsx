// مدونة خصوصي 
import React from 'react'
const BlogCards = (props) => {
    const {imageUrl} = props;
  return (
    <>
        <div className="card w-32 md:w-40 xl:w-64 rounded-lg shadow-md transition duration-500 ease-in-out hover:shadow-xl hover:bg-white hover:overflow-hidden hover:rounded-lg">
                <img className="image w-full h-auto transition duration-500 ease-in-out hover:filter-brightness-100 hover:shadow-xl rounded-t-lg filter-brightness-80" src={imageUrl} alt="" />
                <div className="card-content p-4 text-gray-600 mt-4">
                    {/* props.title */}
                    <h3 className='text-xl md:text-2xl mb-6'><a className='text-black text-yellow-400 transition duration-500 ease-in-out' href="/">{props.title}</a></h3> 
                    {/* props.content */}
                    <p>{props.content}</p>
                    <a className="read-more uppercase text-xs font-bold text-black mb-4 inline-block text-yellow-400 transition duration-500 ease-in-out" href="/">Read More »</a>
                </div>
                <div className="card-footer p-4 md:p-6 border-t border-gray-200">
                    {/* props.date */}
                    <span className='text-xs text-gray-600'>{props.date}</span>
                    {/* props.comment */}
                    <span className="dot text-xs text-gray-600">{props.comment}</span>
                </div>
            </div>
    </>
  )
}

export default BlogCards;