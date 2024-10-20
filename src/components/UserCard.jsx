const deleteUser = async (id) => {
    // Change the url to the backend url
    try {
        const response = await fetch(`change me/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(`User ${id} deleted: ${data}`);
    } catch (error) {
        console.log(error);
    }
};
const updateUser = async (id) => {};

const User = ({ name, email, id }) => {
    return (
        <>
            <div className=" flex justify-left items-center h-fit pr-4 border-b-2 border-slate-300 w-[800px] mx-auto ">
                <p className="text-2xl border-r-black p-6 ">id:{id}</p>
                <p className="text-2xl bg-gray-600 font-bold p-6 text-white">
                    {name}
                </p>
                <p className="px-6 text-lg font-medium ">{email}</p>
                <button
                    onClick={() => deleteUser(id)}
                    className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 "
                >
                    Delete
                </button>
                <button
                    onClick={() => updateUser(id)}
                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
                >
                    Update
                </button>
            </div>
        </>
    );
};
export default User;