import { FaStar } from "react-icons/fa";
import TextType from "../CreateProfile/TextType";
import review3 from "../../assets/review3.jpg"
import review2 from "../../assets/review2.jpg"
import review1 from "../../assets/review1.jpeg"

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

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center group border border-secondary"
                        >
                            {/* Avatar */}
                            <img
                                src={r.avatar}
                                alt={r.name}
                                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-primary group-hover:border-secondary transition-colors"
                            />

                            {/* Stars */}
                            <div className="flex mb-4">
                                {[...Array(r.rating)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className="text-primary group-hover:text-secondary"
                                    />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className=" italic mb-4 leading-relaxed">"{r.comment}"</p>

                            {/* Name & Subject */}
                            <h3 className="font-semibold">{r.name}</h3>
                            <p className=" text-sm">{r.subject} Student</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
