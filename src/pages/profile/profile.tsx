import HeaderHome from "@/components/layout/home/headerHome";

const Profile = () => {
    const gpa = 8.7; // giá trị GPA để vẽ thanh progress

    return (
        <>
            <HeaderHome />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
                <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl overflow-hidden">
                    {/* Header + Avatar */}
                    <div className="bg-gradient-to-b from-indigo-400 to-blue-500 p-6 flex flex-col items-center">
                        <div className="relative">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Nguyen Van A"
                                className="w-28 h-28 rounded-full border-4 border-white object-cover"
                            />
                            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                🔒
                            </button>
                        </div>
                        <h2 className="text-xl font-bold mt-3 text-white">Nguyen Van A</h2>
                        <p className="text-sm text-indigo-100">Student ID: 20230001</p>
                    </div>

                    {/* Personal Information */}
                    <div className="p-5">
                        <h3 className="font-semibold text-gray-700 mb-2">Personal Information</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                            <p><span className="font-medium">Date of Birth:</span> 15/08/2005</p>
                            <p><span className="font-medium">Email:</span> nguyenvana@school.edu.vn</p>
                            <p><span className="font-medium">Phone:</span> 0987654321</p>
                            <p><span className="font-medium">Address:</span> 123 Education Street, Hanoi</p>
                        </div>

                        {/* Academic Information */}
                        <h3 className="font-semibold text-gray-700 mt-4 mb-2">Academic Information</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                            <p><span className="font-medium">Class:</span> 12A1</p>
                            <p><span className="font-medium">Current GPA:</span> {gpa}</p>

                            {/* Thanh progress GPA */}
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                <div
                                    className="bg-green-500 h-2 rounded-full"
                                    style={{ width: `${(gpa / 10) * 100}%` }}
                                ></div>
                            </div>

                            <p className="mt-2"><span className="font-medium">Academic Year:</span> 2023-2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
