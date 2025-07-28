const StepSection = () => {
    const steps = [
        {
            number: 1,
            title: "Đăng nhập hệ thống",
            desc: "Sử dụng tài khoản được cấp để đăng nhập",
        },
        {
            number: 2,
            title: "Chọn khối học",
            desc: "Lựa chọn khối học phù hợp với năng lực",
        },
        {
            number: 3,
            title: "Xác nhận thông tin",
            desc: "Kiểm tra và xác nhận thông tin đăng ký",
        },
        {
            number: 4,
            title: "Hoàn tất đăng ký",
            desc: "Nhận email xác nhận đăng ký thành công",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Các bước đăng ký khối học</h2>
                    <p className="text-gray-600">Thực hiện theo 4 bước đơn giản để hoàn tất đăng ký</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative mb-10 md:mb-0 text-center">
                            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    {step.number}
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-full w-16 border-t-2 border-dashed border-gray-300"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepSection;
