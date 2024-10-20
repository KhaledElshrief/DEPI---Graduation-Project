import { useEffect, useState } from "react";

const AddCourseForm = () => {
    const [courseDetails, setCourseDetails] = useState({
        title: "",
        price: "",
        academicLevel: "",
        numberOfLectures: "",
        teacherName: "",
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setCourseDetails({
            ...courseDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async (courseDetails, image) => {
        console.log(courseDetails, image);
        // ابعت الداتا علي الباك اند
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(courseDetails, image);
    };
    return (
        <div className="max-w-xl mx-auto p-8 px-14 bg-white rounded-lg shadow-md m-4">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-semibold mb-2"
                    >
                        Course Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={courseDetails.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-semibold mb-2"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={courseDetails.price}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="academicLevel"
                        className="block text-sm font-semibold mb-2"
                    >
                        Academic Level
                    </label>
                    <select
                        id="academicLevel"
                        name="academicLevel"
                        value={courseDetails.academicLevel}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Academic Level</option>
                        <option value="High School">High School</option>
                        <option value="College">College</option>
                        <option value="University">University</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="numberOfLectures"
                        className="block text-sm font-semibold mb-2"
                    >
                        Number of Lectures
                    </label>
                    <input
                        type="number"
                        id="numberOfLectures"
                        name="numberOfLectures"
                        value={courseDetails.numberOfLectures}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="teacherName"
                        className="block text-sm font-semibold mb-2"
                    >
                        Teacher Name
                    </label>
                    <input
                        type="text"
                        id="teacherName"
                        name="teacherName"
                        value={courseDetails.teacherName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="image"
                        className="block text-sm font-semibold mb-2"
                    >
                        Course Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Submit Course
                </button>
            </form>
        </div>
    );
};

export default AddCourseForm;
