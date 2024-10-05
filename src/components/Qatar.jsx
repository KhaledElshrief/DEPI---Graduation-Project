import "./css/qatar.css";
const Qatar = () => {
    return (
        <>
            <div className="container">
                <header>
                    <h1>
                        اشتراكات خصوصي
                        <br />
                        النظام القطرى التعليمي
                    </h1>
                    <p>يمكنك الاشتراك في احدي الطرق التالية</p>
                </header>
                <section>
                    <p>النظام المدرسي</p>
                </section>
                <div className="cards">
                    <div className="card">
                        <div className="img">
                            <img src="../images/Group.png" alt="" />
                        </div>
                        <p className="txt">الدبلومة الأمريكية SAT</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src="../images/Group.png" alt="" />
                        </div>
                        <p className="txt">مدارس حكوميةشهادة دولية IGCSE</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src="../images/Group.png" alt="" />
                        </div>
                        <p className="txt">مدارس حكومية</p>
                    </div>
                </div>

                <section>
                    <p>النظام الجامعي</p>
                </section>
                <div className="cards">
                    <div className="card">
                        <div className="img">
                            <img src="../images/eng.webp" alt="" />
                        </div>
                        <p className="txt">كلية هندسة</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src="../images/doctor.webp" alt="" />
                        </div>
                        <p className="txt">كلية طب</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src="../images/tooth.webp" alt="" />
                        </div>
                        <p className="txt">كلية طب اسنان</p>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src="../images/Pharma.webp" alt="" />
                        </div>
                        <p className="txt">كلية صيدلة</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Qatar;
