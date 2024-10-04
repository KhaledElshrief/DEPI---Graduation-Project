import React from 'react'
import BlogCards from './BlogCards'
const BlogCardsContainer = () => {
  return (
    <>
        <div className='flex gap-20 justify-center items-center flex-wrap m-5'>
            <BlogCards 
            title="الطرق الحديثة فى التعليم" 
            content="أفضل الطرق التعليمية الحديثة: في عصر تتسارع فيه وتيرة التغييرات التكنولوجية وتتعدد الأساليب التعليمية، بات التعليم الحديث يعتمد مقاربات متنوعة تتجاوز الطرق التقليدية، مستفيدًا من" 
            data="مارس 6, 2024 " 
            comment="لا توجد تعليقات"
            imageUrl = "C:\khososy0.1\Khososy\public\images\A-Guide-for-Parents-for-IG-Schools-in-Egypt-jpeg.webp"
            />
            <BlogCards 
            title="انظمة التعليم في مصر" 
            content="أنظمة التعليم فى مصر التعليم المدرسى فى مصر يكون من سن 4 سنوات وهى فترة KG kindergarten او فترة روضة الاطفال و تكون لمدة سنتين" 
            data="نوفمبر 6, 2023 " 
            comment="لا توجد تعليقات"
            imageUrl = "C:\khososy0.1\Khososy\public\images\artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.webp"
            />
            <BlogCards 
            title="5 أدوات تكنولوجية جديدة ستغير وجه التعليم الإلكترونى" 
            content="5 أدوات تكنولوجية حديثة ستغيير التعليم الإلكترونى فى عصر تسلل فيه التكنولوجيا إلى كل جزء من حياتنا، يمر التعليم بثورة نوعية بفضل سلسلة من الإبتكارات" 
            data="مارس 17, 2024 " 
            comment="لا توجد تعليقات"
            imageUrl = "C:\khososy0.1\Khososy\public\images\Blog-4-Whats-a-Learning-Management-System-LMS-Pillar-page-content.webp"
            />
        </div>
    </>
  )
}

export default BlogCardsContainer;