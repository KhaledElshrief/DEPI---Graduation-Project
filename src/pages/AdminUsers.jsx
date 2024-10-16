import { useEffect, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import User from "../components/UserCard";
import axios from "axios";

// Defining Delete Function

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetching data from backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    "https://e-commerce-3-gu5g.onrender.com/user"
                );
                const data = await response.data;
                setUsers(data);
                console.log(Object.values(data));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Turning the object recieved from backend into an array
    const arrUsers = Object.values(users);

    return (
        <>
            <div className="flex">
                <AdminSideBar />
                <div className="mt-10 mx-auto">
                    {arrUsers.map((user) => (
                        <User email={user.title} name={user.id} key={user.id} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default AdminUsers;
