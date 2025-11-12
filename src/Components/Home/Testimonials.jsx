import { FaStar } from "react-icons/fa";
import TextType from "../CreateProfile/TextType";
import review3 from "../../assets/review3.jpg"
import review2 from "../../assets/review2.jpg"
import review1 from "../../assets/review1.jpeg"
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    const reviews = [
        {
            name: "Alice Rahman",
            subject: "Physics",
            rating: 5,
            comment: "Study Mate provides an efficient and seamless way to connect with like-minded study partners.",
            avatar: review1,
        },
        {
            name: "Rafiul Islam",
            subject: "Mathematics",
            rating: 4,
            comment: "The platform has significantly enhanced my productivity and collaborative learning experience.",
            avatar: review2,
        },
        {
            name: "Mehnaz Akter",
            subject: "Biology",
            rating: 5,
            comment: "Study Mate offers a reliable and user-friendly solution for organizing and managing study sessions.",
            avatar: review3,
        },
    ];

    // Duplicate reviews to ensure smooth scrolling
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className='flex justify-center mb-10'>
                    <TextType
                        className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-gradient mx-3 lg:mx-auto"
                        text={[
                            "What Our User Say",
                            "What Our User Say",
                        ]}
                        typingSpeed={75}
                        pauseDuration={5000}
                        showCursor={true}
                    />
                </div>

                <Marquee
                    pauseOnHover={true}
                    speed={40}
                    gradient={false}
                >
                    {duplicatedReviews.map((r, i) => (
                        <div
                            key={i}
                            className="my-5 p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-secondary/20 
                            transition-all duration-500 flex flex-col items-center text-center group 
                            border border-primary hover:border-secondary mx-4 w-80
                            hover:scale-105 hover:-translate-y-2"
                        >
                            {/* Avatar */}
                            <img
                                src={r.avatar}
                                alt={r.name}
                                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-primary group-hover:border-secondary transition-colors"
                            />

                            {/* Stars */}
                            <div className="flex mb-4">
                                {[...Array(r.rating)].map((_, starIndex) => (
                                    <FaStar
                                        key={starIndex}
                                        className="text-primary group-hover:text-secondary"
                                    />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="italic mb-4 leading-relaxed">"{r.comment}"</p>

                            {/* Name & Subject */}
                            <h3 className="font-semibold text-primary group-hover:text-secondary">{r.name}</h3>
                            <p className="text-sm text-accent">{r.subject} Student</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Testimonials;