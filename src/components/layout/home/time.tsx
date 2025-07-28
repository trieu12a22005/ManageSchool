import { useEffect, useState } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    targetDate: string; // "YYYY-MM-DDTHH:mm:ss"
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        const deadline = new Date(targetDate).getTime();
        console.log(deadline)
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = deadline - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setExpired(true);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className="bg-white py-12 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Thời gian đăng ký còn lại
                    </h2>
                    <p className="text-gray-600">Hạn cuối đăng ký: {targetDate.split("T")[0]}</p>
                </div>
                {expired ? (
                    <div className="text-center text-red-600 font-bold text-xl">
                        Hết thời gian đăng ký!
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <div className="grid grid-cols-4 gap-4 max-w-2xl">
                            <CountdownBox label="Ngày" value={timeLeft.days} />
                            <CountdownBox label="Giờ" value={timeLeft.hours} />
                            <CountdownBox label="Phút" value={timeLeft.minutes} />
                            <CountdownBox label="Giây" value={timeLeft.seconds} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

interface BoxProps {
    label: string;
    value: number;
}

const CountdownBox: React.FC<BoxProps> = ({ label, value }) => {
    return (
        <div className="bg-indigo-50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">
                {value.toString().padStart(2, "0")}
            </div>
            <div className="text-gray-600">{label}</div>
        </div>
    );
};

export default CountdownTimer;
