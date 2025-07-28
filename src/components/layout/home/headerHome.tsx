import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderHome = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const avatar = localStorage.getItem("avatar");
    const [open, setOpen] = useState(false);

    const handleLogout = async () => {
        const res = await fetch("http://localhost:3055/api/v1/users/logout", {
            method: "POST"
        })
        if (res.ok) {
            toast.success("Đăng xuất thành công!");
        }
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("avatar");
        window.location.href = "/";
    };

    return (
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-3xl" />
                    <h1 className="text-xl font-bold">HỆ THỐNG ĐĂNG KÝ KHỐI HỌC</h1>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex gap-8 text-1xl font-bold">
                        <li><Link to="/" className="hover:text-indigo-200">Trang chủ</Link></li>
                        <li><a href="#" className="hover:text-indigo-200">Khối học</a></li>
                        <li><a href="#" className="hover:text-indigo-200">Hướng dẫn</a></li>
                        <li><a href="#" className="hover:text-indigo-200">Liên hệ</a></li>
                    </ul>
                </nav>

                {token ? (
                    <div className="relative text-[20px]">
                        <button
                            onClick={() => setOpen(!open)}
                            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                        >
                            {avatar && <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />}
                            {username || "User"}
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg text-gray-700">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => setOpen(false)}
                                >
                                    Trang cá nhân
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Đăng xuất
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition"
                    >
                        Đăng nhập
                    </Link>
                )}
                <Toaster position="top-right" />
            </div>
        </header>
    );
};

export default HeaderHome;
