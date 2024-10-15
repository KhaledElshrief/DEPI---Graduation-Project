import { useState, useEffect } from "react";
import AdminSideBar from "../components/AdminSideBar";
import CourseCard from "../components/CourseCard";

const AdminCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <>
            <div className="flex">
                <AdminSideBar />
                    <div className="m-10">
                <CourseCard id="1" name="Course 1" price={10.99} content="اجمد كورس هتاخده في حياتك" /></div>
            </div>
        </>
    );
};
export default AdminCourses;
