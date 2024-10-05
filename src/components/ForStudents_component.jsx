import "./css/students.css";
const ForStudents = () => {
    return (
        <>
        <div className="forstudents">
            <div className="container">
                <header>
                    <h1 className="">اشتراكات خصوصي</h1>
                    <p>يمكنك الاشتراك في احدي الطرق التالية</p>
                </header>
                <div className="cards">
                    <div className="private">
                        <div className="img">
                            <img
                                src="./images/61.webp"
                                alt="private lessons, image of a single person"
                            />
                        </div>
                        <div className="txt">
                            <p>خصوصي</p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="img">
                            <img
                                src="./images/Group.png"
                                alt="Group lessons, image of a group of students"
                            />
                        </div>
                        <div className="txt">
                            <p>مجموعة عامة</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
export default ForStudents;
