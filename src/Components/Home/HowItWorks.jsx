import { FaUserPlus, FaUsers, FaFilter, FaUserTie, FaHandshake, FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import TextType from "../CreateProfile/TextType";
import Container from "../../MyComponents/Container";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HowItWorks = () => {
        useEffect(() => {
            Aos.init({
                duration: 800,
                easing: 'ease-in-out'
            })
        }, []);
    const steps = [
        {
            icon: <FaUserPlus />,
            title: "Create Your Profile",
            desc: "Sign up and create your Study Mate profile with subjects, goals, and schedule.",
        },
        {
            icon: <FaUsers />,
            title: "Find Partners",
            desc: "Browse all profiles on the Find Partner page using sort and search filters.",
        },
        {
            icon: <FaUserTie />,
            title: "Top Partners on Home",
            desc: "Most active or popular partners appear automatically on the home page.",
        },
        {
            icon: <FaHandshake />,
            title: "View Partner Details",
            desc: "Open a partner's profile to send a request and automatically update partner count.",
        },
        {
            icon: <FaUsers />,
            title: "My Connections",
            desc: "View all your connected partners in one place for easy access and planning.",
        },
        {
            icon: <FaSyncAlt />,
            title: "Manage Connections",
            desc: "Delete or update your connections to organize study sessions effectively.",
        },
    ];

    return (
        <div className="py-20">
            <Container className="max-w-6xl mx-auto px-6">
                <div className='flex justify-center mb-10'>
                    <TextType
                        className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-gradient mx-3 lg:mx-auto"
                        text={[
                            "How It Works",
                            "How It Works",
                        ]}
                        typingSpeed={75}
                        pauseDuration={5000}
                        showCursor={true}
                    />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className=" p-6 rounded-2xl shadow-md shadow-purple-500/35 border border-secondary/50 hover:shadow-xl transition duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="text-4xl mb-4 text-primary group-hover:text-secondary transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="text-xl text-gradient font-semibold mb-2 ">{step.title}</h3>
                            <p className="leading-relaxed text-accent">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default HowItWorks;
