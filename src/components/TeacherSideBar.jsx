import { Link } from "react-router-dom";

const TeacherSideBar = () => {
    return (
        <aside className="w-64 bg-gray-800 p-4 h-screen">
            <h2 className="text-white text-xl mb-4">Course Manager</h2>
            <nav className="space-y-1">
                <Link
                    to="/teacher-courses"
                    className="block py-2 px-4 text-m text-white hover:bg-gray-700 rounded"
                >
                    My Courses
                </Link>
                <Link
                    to="/add-course"
                    className="block py-2 px-4 text-m text-white hover:bg-blue-600 rounded"
                >
                    Add Course
                </Link>
            </nav>
        </aside>
    );
};

export default TeacherSideBar;
