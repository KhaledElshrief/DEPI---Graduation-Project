import React from 'react'
import InstructorGrid from './InstructorGrid'

const courses = [
  {
    id: 1,
    title: '2nd sec - 1st sem - Chemistry Basics',
    image: 'images1/chemistry.webp',
    university: 'ثانوي',
    price: '2 ساعة مجاناً',
    tag: 'رائج',
  },
  {
    id: 2,
    title: 'GUC - Ceutical 3 - lecture 4',
    image: 'images1/pharmacy.webp',
    university: 'GUC-الجامعة الألمانية',
    price: '250EGP',
  },
  {
    id: 3,
    title: 'GUC - Organic 1 - lecture 4',
    image: 'images1/Basics.webp',
    university: 'GUC-الجامعة الألمانية',
    price: '250EGP',
  },
]
 
export default function TeacherProfile() {
  return (
<div className="bg-white min-h-screen" dir="rtl">
<main className="container mx-auto px-4 py-8">
<div className="flex flex-col md:flex-row items-center md:items-start mb-8">
<div className="md:w-1/2 relative">
<img
              src="images1/Teacher.webp"
              alt="Mahmoud Mohy"
              className="rounded-full w-64 h-64 object-cover mx-auto md:mx-0"
            />
<button className="absolute top-0 right-0 bg-yellow-400  font-bold py-2 px-4 rounded-full hover:bg-black text-white transition duration-300">
              مدرس الشهر
</button>
</div>
<div className="md:w-1/2 text-center md:text-right mt-4 md:mt-0">
<h1 className="text-4xl font-bold mb-2">محمود محي</h1>
<div className="relative inline-block">
<div className="bg-black text-white py-2 px-4 rounded-full mb-4">
<span className="text-cyan-400">مدرس</span>{' '}
<span className="text-yellow-400">الشهر</span>
</div>
<div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs py-1 px-2 rounded-full">
                خصم 50٪ على محاضرات المسجلة
</div>
</div>
</div>
</div>
 
        <h2 className="text-2xl font-bold mb-4">دورات المدرس:</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {courses.map((course) => (
<div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md">
<img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
<div className="p-4">
<p className="text-sm text-gray-600 mb-2">{course.university}</p>
<h3 className="font-bold text-lg mb-2">{course.title}</h3>
<div className="flex justify-between items-center">
<span className="font-bold text-lg">{course.price}</span>
                  {course.tag && (
<span className="bg-red-500 text-white text-xs py-1 px-2 rounded-full">
                      {course.tag}
</span>
                  )}
</div>
</div>
</div>
          ))}
</div>
          <InstructorGrid />
</main>
</div>
  )
}
