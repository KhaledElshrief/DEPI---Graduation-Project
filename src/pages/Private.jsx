import CardsContainer from "../components/CardsContainer";
import Card from "../components/card";
const Praivate = () => {
    return (
        <>
            <div className="text-center">
                <h1 className=" m-10 text-3xl font-bold text-gray-900 ">
                    الإشتراك في مجموعة خصوصي
                </h1>
                <p className="text-sm font-medium text-gray-700 mb-10">
                    اختر المرحلة الدراسية وعدد المواد التي تريد الإشتراك بها
                    واكتشف مزايا الإشتراك والأسعار وللعلم طريقة الإشتراك هذة
                    يكون الطالب مسجل في مجموعة تتكون من 4 الى 6 طلاب فقط
                </p>
            </div>
            <CardsContainer>
                <Card
                    title="المرحلة الثانوية ( ثالثة )"
                    img="/images/61.webp"
                    desc={["نسخة تجريبية مجانية ", <br />, " بـ600.00EGP"]}
                />
                <Card
                    title="المرحلة الثانوية (اولي-ثانية )"
                    img="/images/61.webp"
                    desc={["نسخة تجريبية مجانية ", <br />, " بـ550.00EGP"]}
                />

                <Card
                    title="المرحلة الإعدادية"
                    img="/images/61.webp"
                    desc={["نسخة تجريبية مجانية ", <br />, " بـ500.00EGP"]}
                />
                <Card
                    title="المرحلة الأبتدائية"
                    img="/images/61.webp"
                    desc={["نسخة تجريبية مجانية ", <br />, " بـ450.00EGP"]}
                    features={["الاشتراك مجاني", "الاشتراك مجاني"]}
                />
            </CardsContainer>
        </>
    );
};
export default Praivate;
