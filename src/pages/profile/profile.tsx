import { useEffect, useState } from "react";
import HeaderHome from "@/components/layout/home/headerHome";

interface IProfile {
    fullName: string;
    email: string;
    birthday: string;
    phone: string;
    address: string;
    username: string;
}

const Profile = () => {
    const [profile, setProfile] = useState<IProfile | null>(null);
    const gpa = 8.7;

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                    method: "GET",
                    credentials: "include",
                });
                const data = await res.json();
                if (res.ok) {
                    setProfile(data);
                } else {
                    console.error("Lỗi:", data.message);
                }
            } catch (err) {
                console.error("Fetch profile error:", err);
            }
        };

        fetchProfile();
    }, []);
    if (!profile) {
        console.log(profile)
        return (
            <>
                <HeaderHome />
                <div className="min-h-screen flex justify-center items-center">
                    <p>Đang tải thông tin...</p>
                </div>
            </>
        );
    }
    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <HeaderHome />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
                <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-b from-indigo-400 to-blue-500 p-6 flex flex-col items-center">
                        <div className="relative">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt={profile.fullName}
                                className="w-28 h-28 rounded-full border-4 border-white object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold mt-3 text-white">{profile.fullName}</h2>
                        <p className="text-sm text-indigo-100">Username: {profile.username}</p>
                    </div>

                    <div className="p-5">
                        <h3 className="font-semibold text-gray-700 mb-2">Personal Information</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                            <p><span className="font-medium">Date of Birth:</span> {formatDate(profile.birthday)}</p>
                            <p><span className="font-medium">Email:</span> {profile.email}</p>
                            <p><span className="font-medium">Address:</span> {profile.address}</p>
                        </div>

                        <h3 className="font-semibold text-gray-700 mt-4 mb-2">Academic Information</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                            <p><span className="font-medium">Class:</span> 12A1</p>
                            <p><span className="font-medium">Current GPA:</span> {gpa}</p>
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
