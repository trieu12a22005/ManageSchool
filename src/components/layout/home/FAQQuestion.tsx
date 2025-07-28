import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQSection = () => {
    const faqs: FAQItem[] = [
        {
            question: "Tôi có thể thay đổi khối học sau khi đã đăng ký không?",
            answer: "Bạn có thể thay đổi trong thời gian mở hệ thống đăng ký. Sau khi đóng, cần liên hệ nhà trường.",
        },
        {
            question: "Thời gian đăng ký khối học trong bao lâu?",
            answer: "Thông thường hệ thống mở đăng ký trong 2 tuần kể từ ngày thông báo.",
        },
        {
            question: "Tôi quên mật khẩu đăng nhập thì phải làm sao?",
            answer: "Nhấn vào 'Quên mật khẩu' và làm theo hướng dẫn để đặt lại mật khẩu.",
        },
        {
            question: "Làm sao để biết đăng ký của tôi đã thành công?",
            answer: "Hệ thống sẽ hiển thị thông báo xác nhận và gửi email cho bạn.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Câu hỏi thường gặp</h2>
                    <p className="text-gray-600">Tìm câu trả lời cho những thắc mắc phổ biến</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition"
                            >
                                <span className="text-lg font-medium text-left">{faq.question}</span>
                                <span className="text-xl">{activeIndex === index ? "▲" : "▼"}</span>
                            </button>
                            {activeIndex === index && (
                                <div className="p-5 bg-white border-t border-gray-200 text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition">
                        Xem thêm câu hỏi →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
