const FooterSection = () => {
    return (
        <>
            {/* CTA Section */}
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 text-center pt-[50px] pb-[50px] to-fuchsia-500 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Sẵn sàng đăng ký khối học?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-indigo-100">
                    Đăng ký ngay để chọn khối học phù hợp với định hướng tương lai của bạn
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-100 transition">
                        Đăng ký ngay
                    </button>
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition">
                        Liên hệ hỗ trợ
                    </button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <i className="fas fa-graduation-cap text-2xl"></i>
                            <h3 className="text-xl font-bold">ĐĂNG KÝ KHỐI HỌC</h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Hệ thống đăng ký khối học trực tuyến dành cho học sinh THPT.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Liên kết nhanh</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Trang chủ</a></li>
                            <li><a href="#" className="hover:text-white">Khối học</a></li>
                            <li><a href="#" className="hover:text-white">Hướng dẫn</a></li>
                            <li><a href="#" className="hover:text-white">Câu hỏi thường gặp</a></li>
                            <li><a href="#" className="hover:text-white">Liên hệ</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Khối học</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Khối A (Toán - Lý - Hóa)</a></li>
                            <li><a href="#" className="hover:text-white">Khối B (Toán - Hóa - Sinh)</a></li>
                            <li><a href="#" className="hover:text-white">Khối C (Văn - Sử - Địa)</a></li>
                            <li><a href="#" className="hover:text-white">Khối D (Toán - Văn - Anh)</a></li>
                            <li><a href="#" className="hover:text-white">Khối năng khiếu</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Liên hệ</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center"><i className="fas fa-map-marker-alt mr-3 text-indigo-400"></i>123 Đường ABC, Quận XYZ, TP.HCM</li>
                            <li className="flex items-center"><i className="fas fa-phone-alt mr-3 text-indigo-400"></i>(028) 1234 5678</li>
                            <li className="flex items-center"><i className="fas fa-envelope mr-3 text-indigo-400"></i>hotro@dangkykhoihoc.edu.vn</li>
                            <li className="flex items-center"><i className="fas fa-clock mr-3 text-indigo-400"></i>Thứ 2 - Thứ 7: 7:30 - 17:00</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
                    © 2023 Hệ thống Đăng ký Khối học THPT. Bảo lưu mọi quyền.
                </div>
            </footer>
        </>
    );
};

export default FooterSection;
