const BlockStudy = () => {
    const blocks = [
        {
            title: "Khối A",
            subjects: "Toán – Lý – Hóa",
            color: "bg-purple-600",
            items: ["Kỹ thuật, Công nghệ", "Kinh tế, Quản trị", "Khoa học tự nhiên"],
        },
        {
            title: "Khối B",
            subjects: "Toán – Hóa – Sinh",
            color: "bg-green-600",
            items: ["Y dược, Sức khỏe", "Nông nghiệp", "Khoa học sự sống"],
        },
        {
            title: "Khối C",
            subjects: "Văn – Sử – Địa",
            color: "bg-amber-600",
            items: ["Báo chí, Truyền thông", "Luật, Nhân văn", "Giáo dục, Xã hội"],
        },
        {
            title: "Khối D",
            subjects: "Toán – Văn – Anh",
            color: "bg-blue-600",
            items: ["Ngoại ngữ, Quốc tế", "Kinh tế đối ngoại", "Du lịch, Dịch vụ"],
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Các khối học phổ biến</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lựa chọn khối học phù hợp với năng lực và định hướng nghề nghiệp tương lai của bạn
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blocks.map((block, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:translate-y-[-5px]">
                            <div className={`${block.color} p-4 text-white`}>
                                <h3 className="text-xl font-bold">{block.title}</h3>
                                <p className="opacity-90">{block.subjects}</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-2 text-gray-700 mb-6">
                                    {block.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <span className="text-green-500 mr-2">✔</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full ${block.color} text-white py-2 rounded-lg hover:opacity-90 transition`}>
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition">
                        Xem tất cả các khối học →
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BlockStudy;
