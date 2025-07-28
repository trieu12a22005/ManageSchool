import { FaGraduationCap } from "react-icons/fa"
import { Link } from "react-router-dom"

const HeaderHome = () => {
    return (
        <>
            <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-white">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-3xl" />
                        <h1 className="text-xl font-bold">HỆ THỐNG ĐĂNG KÝ KHỐI HỌC</h1>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex gap-8 text-1xl font-bold">
                            <li><Link to="/home" className="hover:text-indigo-200">Trang chủ</Link></li>
                            <li><a href="#" className="hover:text-indigo-200">Khối học</a></li>
                            <li><a href="#" className="hover:text-indigo-200">Hướng dẫn</a></li>
                            <li><a href="#" className="hover:text-indigo-200">Liên hệ</a></li>
                        </ul>
                    </nav>
                    <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition">
                        Đăng nhập
                    </Link>
                </div>
            </header>
        </>
    )
}
export default HeaderHome