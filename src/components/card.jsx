const Card = (props) => {
    return (
        <>
            <div
                className="w-full mb-12 rounded-2xl shadow-md h-full 
            border-stone-500 border-1 border-opacity-30 
            hover:scale-105 hover:shadow-2xl hover:shadow-stone-500
            transition duration-300 ease-in-out "
            >
                <section className="border-b-2 border-stone-500 mb-2 border-opacity-30">
                    <p className="text-center mt-6 font-bold">{props.title}</p>
                    <div
                        style={{ "border-width": "1px" }}
                        className=" m-auto mt-3 mb-3 rounded-full overflow-hidden w-40"
                    >
                        <img src={props.img} alt="" />
                    </div>
                    <p className="text-center text-xl mb-2 ">{props.desc}</p>
                </section>
                <section className="border-b-2 border-stone-500 mb-2 border-opacity-30">
                    <h2 className="text-center m-4">المميزات</h2>
                    <ul
                        className="text-right list-disc pr-10 mb-4"
                        style={{ direction: "rtl" }}
                    >
                        <li>حصص مباشرة مع المعلم</li>
                        <li>الحصول على تسجيل الحصة</li>
                        <li>ملفات الحصة pdf</li>
                        <li>واجبات و امتحانات شهرية للمادة</li>
                    </ul>
                </section>
                <div className="mx-auto mt-4 flex justify-center items-center">
                    <button
                        className="hover:bg-yellow-400 text-white rounded-full
                py-2 px-6 mb-4  text-xl
                bg-orange-500 transition duration-300 "
                    >
                        تسجيل الدخول
                    </button>
                </div>
            </div>
        </>
    );
};
export default Card;
