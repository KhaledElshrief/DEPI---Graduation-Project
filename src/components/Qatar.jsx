import React from "react";

const Qatar = () => {
    return (
        <div className="  mx-auto w-auto max-w-7xl font-cairo text-base">
            <header className="text-center text-[#2c2c2c]">
                <h1 className="my-10 inline-block text-3xl font-black leading-relaxed">
                    اشتراكات خصوصي
                    <br />
                    النظام القطرى التعليمي
                </h1>
                <p className="mb-8 text-xl">
                    يمكنك الاشتراك في احدي الطرق التالية
                </p>
            </header>
            {/* Header and section remain unchanged */}
            <section className="bg-[#2c2c2c] py-4 text-cenater text-3xl">
                <p className="m-0 text-xl text-white text-center">
                    النظام المدرسي
                </p>
            </section>
            <div className=" my-4 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[
                    "الدبلومة الأمريكية SAT",
                    "مدارس حكوميةشهادة دولية IGCSE",
                    "مدارس حكومية",
                ].map((text, index) => (
                    <div key={index} className="p-4 group relative h-full">
                        <div className="absolute inset-0 rounded-3xl bg-[#e0e0e0] transition-all duration-300 ease-in-out group-hover:border-[5px] group-hover:border-[#fc5db4] group-hover:shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2),20px_20px_rgba(240,46,170,0.1),25px_25px_rgba(240,46,170,0.05)]"></div>
                        <div className="relative flex min-h-[300px] flex-col items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-[1.02]">
                            <div className="px-10">
                                <img
                                    src="../images/Group.png"
                                    alt=""
                                    className="mx-auto h-auto w-[300px] rounded-[60px]"
                                />
                            </div>
                            <p className="mt-4 max-w-full text-center text-xl font-black text-[#2c2c2c]">
                                {text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Second section remains unchanged */}
            <section className="bg-[#2c2c2c] py-4 text-cenater text-3xl">
                <p className="m-0 text-xl text-white text-center">
                    النظام الجامعي
                </p>
            </section>
            <div className="  my-4 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[
                    { text: "كلية هندسة", img: "eng.webp" },
                    { text: "كلية طب", img: "doctor.webp" },
                    { text: "كلية طب اسنان", img: "tooth.webp" },
                    { text: "كلية صيدلة", img: "Pharma.webp" },
                ].map((item, index) => (
                    <div key={index} className=" group relative h-full">
                        <div className="absolute inset-0 rounded-3xl bg-[#e0e0e0] transition-all duration-300 ease-in-out group-hover:border-[5px] group-hover:border-[#fc5db4] group-hover:shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2),20px_20px_rgba(240,46,170,0.1),25px_25px_rgba(240,46,170,0.05)]"></div>
                        <div className="relative flex min-h-[300px] flex-col items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-[1.02]">
                            <div className="px-10">
                                <img
                                    src={`../images/${item.img}`}
                                    alt=""
                                    className="mx-auto h-auto w-[300px] rounded-[60px]"
                                />
                            </div>
                            <p className="mt-4 max-w-full text-center text-xl font-black text-[#2c2c2c]">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Qatar;
