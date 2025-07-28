import BlockStudy from "@/components/layout/home/blockStudy";
import FAQSection from "@/components/layout/home/FAQQuestion";
import FooterSection from "@/components/layout/home/footerSection";
import HeaderHome from "@/components/layout/home/headerHome";
import HeroSection from "@/components/layout/home/HeroSection";
import StepSection from "@/components/layout/home/registerStep";
import CountdownTimer from "@/components/layout/home/time";
const Home = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-[Be_Vietnam_Pro]">
            {/* Header */}
            <HeaderHome />
            {/* Hero Section */}
            <HeroSection />
            <CountdownTimer targetDate="2025-12-31T23:59:59" />
            <BlockStudy />
            <StepSection />
            <FAQSection />
            <FooterSection />
        </div>
    );
};

export default Home;
