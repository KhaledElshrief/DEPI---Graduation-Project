import TeacherSideBar from "../components/TeacherSideBar";
import AddCourseForm from "../components/AddCourseForm.jsx";
const AddCourse = () => {
    return (
        <>
            <div className="flex">
                <TeacherSideBar />
                <AddCourseForm />
            </div>
        </>
    );
};
export default AddCourse;
