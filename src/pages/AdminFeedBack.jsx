import AdminSideBar from "../components/AdminSideBar";
import { useState, useEffect } from "react";
import FeedBackCard from "../components/FeedBackCard";

const AdminFeedBack = () => {
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch("حط اللينك بتاع الباك هنا");
                const data = await response.json();
                setFeedback(data);
                setLoading(false);
            } catch (error) {
                console.log("error");
            }
        };
        fetchFeedback();
    }, []);

    return (
        <>
            <div className="flex">
                <AdminSideBar />
                <div className="m-10">
                    <FeedBackCard
                        feedbackText={"اجمد كورس خدته في حياتي"}
                        userName={"user 1"}
                        courseName={"course 1"}
                        rating={5}
                    />
                </div>
            </div>
        </>
    );
};
export default AdminFeedBack;
