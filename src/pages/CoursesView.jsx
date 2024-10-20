const CoursesView = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center m-8">
                <img
                    className="max-w-[600px] mx-auto"
                    src="../images/discount.webp"
                    alt="50% off"
                />
            </div>
            <form className="m-8 w-56 mx-auto flex h-16 justify-center items-center  ">
                <input
                    type="text"
                    placeholder="البحث في الدورات"
                    className="px-4 py-2 border w-96 h-full outline-none shadow-xl"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-10 py-2 h-full shadow-xl"
                >
                    بحث
                </button>
            </form>
        </>
    );
};
export default CoursesView;
