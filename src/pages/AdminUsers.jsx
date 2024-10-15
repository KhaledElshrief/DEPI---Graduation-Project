import { useEffect, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import User from "../components/UserCard";
// Defining Delete Function

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetching data from backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                const data = await response.json();
                setUsers(data);
                Object.values(users);
                setLoading(false);
            } catch {
                console.log("error");
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
