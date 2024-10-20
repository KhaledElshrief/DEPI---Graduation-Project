import { useState, useEffect } from "react";
import AdminSideBar from "../components/AdminSideBar";
import AdminCourseCard from "../components/AdminCourseCard";

const AdminCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <>
            <div className="flex">
                <AdminSideBar />
                <div className="m-10  flex">
                    <div className="text-6xl font-bold bg-blue-500 text-white mr-auto w-10 flex justify-center items-center cursor-pointer">+</div>
                    <AdminCourseCard
                        id="1"
                        name="Course 1"
                        price={10.99}
                        content="اجمد كورس هتاخده في حياتك"
                    />
                    <AdminCourseCard
                        id="1"
                        name="Course 1"
                        price={10.99}
                        content="اجمد كورس هتاخده في حياتك"
                    />
                </div>
            </div>
        </>
    );
};
export default AdminCourses;
