import { NavLink } from "react-router-dom";
import "../css/students.css";
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
                            {" "}
                            <NavLink to="/For_students/Private">
                                <div className="img">
                                    <img
                                        src="./images/61.webp"
                                        alt="private lessons, image of a single person"
                                    />
                                </div>
                                <div className="txt">
                                    <p>خصوصي</p>
                                </div>{" "}
                            </NavLink>
                        </div>
                        <div className="group">
                            <NavLink to="/For_students/Group">
                                <div className="img">
                                    <img
                                        src="./images/Group.png"
                                        alt="Group lessons, image of a group of students"
                                    />
                                </div>
                                <div className="txt">
                                    <p>مجموعة عامة</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ForStudents;
