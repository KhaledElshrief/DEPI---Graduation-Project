import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const SingleUser = () => {
    const { id } = useParams();
    console.log(id);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`غير اللينك /${id}`);
                const data = await response.json();
                setUser(data);
                setLoading(false);
            } catch (error) {
                console.log("error");
            }
        };
        fetchUser();
    }, []);


    // Submits the data to backend
    const Submit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`غير اللينك /${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={Submit}>
            <h2>User Details</h2>
            <input
                type="text"
                name="firstName"
                value={user.firstName || ""}
                // onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={user.lastName || ""}
                // onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="email"
                name="email"
                value={user.email || ""}
                // onChange={handleChange}
                placeholder="Email"
            />
            {/* Add more fields as needed */}
            <button type="submit">Update User</button>
        </form>
    );
};
export default SingleUser;
