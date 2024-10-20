import TeacherSideBar from "../components/TeacherSideBar";
import AdminCourseCard from "../components/AdminCourseCard";

const TeachersCourses = () => {
    return (
        <>
            <div className="flex">
                <TeacherSideBar />
                <div className="flex py-4">
                    <AdminCourseCard />
                </div>
            </div>
        </>
    );
};
export default TeachersCourses;
