import LayoutHeader from "@/components/layoutheader/layoutHeader";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
    interface LoginFormData {
        username: string,
        password: string
    }
    const [formData, setFormData] = useState<LoginFormData>({
        username: "",
        password: ""
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Dữ liệu form:", formData);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#f8f8ff]">

            <LayoutHeader />
            {/* Login Box */}
            <div className="bg-white rounded-xl shadow-lg mt-6 w-[400px] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#6448DC] to-[#7A54F7] p-3">
                    <h2 className="text-white font-bold">ĐĂNG NHẬP</h2>
                </div>

                {/* Form */}
                <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                    {/* Tên đăng nhập */}
                    <div>
                        <label className="text-sm font-semibold">Tên đăng nhập</label>
                        <div className="flex items-center border rounded-lg mt-1 px-3">
                            <FaUser className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Nhập tên đăng nhập"
                                name="username"
                                value={formData.username}
                                className="flex-1 px-2 py-2 focus:outline-none"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Mật khẩu */}
                    <div>
                        <label className="text-sm font-semibold">Mật khẩu</label>
                        <div className="flex items-center border rounded-lg mt-1 px-3">
                            <FaLock className="text-gray-400" />
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu"
                                className="flex-1 px-2 py-2 focus:outline-none"
                                onChange={handleChange}
                                name="password"
                                value={formData.password}
                            />
                            <FiEye className="text-gray-400 cursor-pointer" />
                        </div>
                    </div>

                    {/* Options */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-purple-600" />
                            Ghi nhớ đăng nhập
                        </label>
                        <a href="#" className="text-purple-600 hover:underline">
                            Quên mật khẩu?
                        </a>
                    </div>

                    {/* Button */}
                    <button className="
            w-full py-2 text-white font-semibold rounded-lg
            bg-gradient-to-r from-[#6448DC] to-[#7A54F7] flex justify-center items-center gap-2
            hover:opacity-90 transition
          ">
                        <IoMdSchool />
                        Đăng nhập
                    </button>

                    {/* Register */}
                    <p className="text-center text-sm mt-2">
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="text-purple-600 font-semibold hover:underline">
                            Đăng ký ngay
                        </Link>
                    </p>
                </form>
            </div>

            {/* Footer */}
            <p className="mt- text-xs text-gray-400">
                © 2023 Hệ thống đăng ký khối học THPT. Bản quyền thuộc về Bộ Giáo dục và Đào tạo.
            </p>
        </div>
    );
};

export default Login;
