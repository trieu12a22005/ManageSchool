import { Link } from "react-router-dom"

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-white py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* Left Content */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
                        Đăng ký khối học <br /> năm học 2023-2024
                    </h2>
                    <p className="text-lg text-indigo-100">
                        Hệ thống đăng ký khối học trực tuyến dành cho học sinh THPT. Đơn giản – Nhanh chóng – Tiện lợi
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/register" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-100 transition">
                            Đăng ký ngay
                        </Link>
                        <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition">
                            Tìm hiểu thêm
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3976/3976626.png"
                        alt="Học sinh"
                        className="w-72 md:w-96"
                    />
                </div>
            </div>
        </section>
    )
}
export default HeroSection