import React from 'react'
import BlogCards from './BlogCards'
const BlogCardsContainer = () => {
  return (
    <>
        <div className='flex gap-20 justify-center items-center flex-wrap m-5'>
            <BlogCards 
            path="/NewLearning"
            title="الطرق الحديثة فى التعليم" 
            content="أفضل الطرق التعليمية الحديثة: في عصر تتسارع فيه وتيرة التغييرات التكنولوجية وتتعدد الأساليب التعليمية، بات التعليم الحديث يعتمد مقاربات متنوعة تتجاوز الطرق التقليدية، مستفيدًا من" 
            date="مارس 6, 2024 " 
            comment="لا توجد تعليقات"
            imageUrl = "images1/Parents.webp"
            />
            <BlogCards 
            path="/LearningSys"
            title="انظمة التعليم في مصر" 
            content="أنظمة التعليم فى مصر التعليم المدرسى فى مصر يكون من سن 4 سنوات وهى فترة KG kindergarten او فترة روضة الاطفال و تكون لمدة سنتين" 
            date="نوفمبر 6, 2023 " 
            comment="لا توجد تعليقات"
            imageUrl = "images1/LMS.webp"
            />
            <BlogCards 
            path="/TechTools"
            title="5 أدوات تكنولوجية جديدة ستغير وجه التعليم الإلكترونى" 
            content="5 أدوات تكنولوجية حديثة ستغيير التعليم الإلكترونى فى عصر تسلل فيه التكنولوجيا إلى كل جزء من حياتنا، يمر التعليم بثورة نوعية بفضل سلسلة من الإبتكارات" 
            date="مارس 17, 2024 " 
            comment="لا توجد تعليقات"
            imageUrl = "images1/AI.webp"
            />
        </div>
    </>
  )
}

export default BlogCardsContainer;