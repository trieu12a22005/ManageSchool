import HeaderHome from "@/components/layout/home/headerHome";
import LayoutHeader from "@/components/layoutheader/layoutHeader";
import { CheckData } from "@/validation/checkData/checkData";
import Password from "antd/es/input/Password";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaLock, FaUser } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { IoMdSchool } from "react-icons/io";
import { MdEmail } from "react-icons/md";

interface RegisterFormData {
    fullName: string;
    email: string;
    birth: string;
    password: string;
    confirm: string;
    address: string;
    username: string;
}

const Register = () => {
    const [formRegister, setFormRegister] = useState<RegisterFormData>({
        fullName: "",
        email: "",
        birth: "",
        password: "",
        confirm: "",
        address: "",
        username: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // ✅ Gọi hàm CheckData trước khi gửi
        if (!CheckData(formRegister)) {
            toast.error("Vui lòng điền đầy đủ thông tin");
            return;
        }

        try {
            const res = await fetch("http://localhost:3055/api/v1/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(
                    {
                        email: formRegister.email,
                        username: formRegister.username,
                        birth: formRegister.birth,
                        password: formRegister.password,
                        address: formRegister.address,
                        fullName: formRegister.fullName
                    }
                ), // ✅ Gửi trực tiếp, không bọc {formRegister}
            });

            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message || "Đăng ký thất bại");
            }
            else {
                toast.success("Đăng ký thành công!");
            }
        } catch (err) {
            console.error("Fetch error:", err);

        }

    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormRegister({
            ...formRegister,
            [name]: value,
        });
    };

    return (
        <>
            <HeaderHome />
            <div className="min-h-screen mt-[20px] flex flex-col justify-center items-center bg-[#f8f8ff]">
                <LayoutHeader />
                <div className="bg-white rounded-xl shadow-lg mt-6 w-[400px] overflow-hidden">
                    <div className="bg-gradient-to-r from-[#6448DC] to-[#7A54F7] p-3">
                        <h2 className="text-white font-bold">ĐĂNG KÝ</h2>
                    </div>
                    <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="text-sm font-semibold">Họ và tên</label>
                            <div className="flex items-center border rounded-lg mt-1 px-3">
                                <FaUser className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Nhập họ và tên"
                                    name="fullName"
                                    value={formRegister.fullName}
                                    onChange={handleChange}
                                    className="flex-1 px-2 py-2 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-1">Ngày sinh</label>
                            <input
                                type="date"
                                name="birth"
                                value={formRegister.birth}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold">Địa chỉ</label>
                            <div className="flex items-center border rounded-lg mt-1 px-3">
                                <FaUser className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Nhập địa chỉ"
                                    name="address"
                                    value={formRegister.address}
                                    onChange={handleChange}
                                    className="flex-1 px-2 py-2 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold">Email</label>
                            <div className="flex items-center border rounded-lg mt-1 px-3">
                                <MdEmail className="text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Nhập email"
                                    name="email"
                                    value={formRegister.email}
                                    onChange={handleChange}
                                    className="flex-1 px-2 py-2 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold">Tên đăng nhập</label>
                            <div className="flex items-center border rounded-lg mt-1 px-3">
                                <FaUser className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Nhập tên đăng nhập"
                                    name="username"
                                    value={formRegister.username}
                                    onChange={handleChange}
                                    className="flex-1 px-2 py-2 focus:outline-none"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold">Mật khẩu</label>
                            <div className="flex items-center border rounded-lg mt-1 px-3">
                                <FaLock className="text-gray-400" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Nhập mật khẩu"
                                    value={formRegister.password}
                                    onChange={handleChange}
                                    className="flex-1 px-2 py-2 focus:outline-none"
                                    autoComplete="new-password"
                                />
                                <FiEye className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold">Xác nhận mật khẩu</label>
                            <div className="flex items-center border rounded-lg mt-1 px-3">
                                <FaLock className="text-gray-400" />
                                <input
                                    type="password"
                                    name="confirm"
                                    placeholder="Nhập lại mật khẩu"
                                    value={formRegister.confirm}
                                    onChange={handleChange}
                                    className="flex-1 px-2 py-2 focus:outline-none"
                                    autoComplete="new-password"
                                />
                                <FiEye className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#6448DC] to-[#7A54F7] flex justify-center items-center gap-2 hover:opacity-90 transition"
                        >
                            <IoMdSchool />
                            Đăng ký
                        </button>
                    </form>
                </div>

                <p className="mt-6 text-xs text-gray-400">
                    © 2023 Hệ thống đăng ký khối học THPT. Bản quyền thuộc về Bộ Giáo dục và Đào tạo.
                </p>
                <p className="text-xs text-gray-400 mb-[20px]">
                    Liên hệ: trieu7a2005@gmail.com | ĐT: 0363013723
                </p>

                <Toaster position="top-right" />
            </div>
        </>
    );
};

export default Register;
