import { NavLink } from "react-router-dom";

const AdminSideBar = () => {
    return (
        <>
            <aside className="admin-sidebar bg-gray-800 text-white p-4">
                <h2 className="font-bold text-xl mb-4">Admin Panel</h2>
                <nav>
                    <ul className="lex flex-col space-y-4 ">
                        <NavLink to="/admin-users">
                            <li className="mb-2 text-white hover:translate-x-1 transition border-b border-b-slate-300">
                                Users
                            </li>
                        </NavLink>
                        <NavLink to="/admin-courses">
                            <li className="mb-2 text-white hover:translate-x-1 transition border-b border-b-slate-300">
                                Courses
                            </li>
                        </NavLink>
                        <NavLink to="/admin-feedback">
                            <li className="mb-2 text-white hover:translate-x-1 transition border-b border-b-slate-300">
                                Feedback
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </aside>
        </>
    );
};
export default AdminSideBar;
