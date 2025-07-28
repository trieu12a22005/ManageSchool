import { IoMdSchool } from "react-icons/io"

const LayoutHeader = () => {
    return (
        <>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#6448DC] to-[#7A54F7] flex items-center justify-center shadow-lg">
                <IoMdSchool className="text-white text-4xl" />
            </div>

            {/* Title */}
            <h1 className="mt-4 text-2xl font-bold text-gray-800">HỆ THỐNG ĐĂNG KÝ KHỐI HỌC</h1>
            <p className="text-gray-500">Dành cho học sinh Trung học phổ thông</p>

        </>
    )
}
export default LayoutHeader