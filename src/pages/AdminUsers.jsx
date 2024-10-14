import AdminSideBar from "../components/AdminSideBar";
const User = ({ name, email, id }) => {
    return (
        <>
            <div className=" flex justify-left items-center h-fit pr-4 border-b-2 border-slate-300 w-[800px] mx-auto ">
                <p className="text-2xl border-r-black p-6 ">id:{id}</p>
                <p className="text-2xl bg-gray-600 font-bold p-6 text-white">
                    {name}
                </p>
                <p className="px-6 text-lg font-medium ">{email}</p>
                <button className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ">
                    Delete
                </button>
                <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
                    Update
                </button>
            </div>
        </>
    );
};


const AdminUsers = () => {

    return (
        <>
            <div className="flex">
                <AdminSideBar />
                <div className="mt-10 mx-auto">
                <User name={"ahmed"}  email={"b9zJk@example.com"} id={1} /></div>
            </div>
        </>
    );
};
export default AdminUsers;
