import { Link } from "react-router";
import user from "../assets/user.png";
import { FaArrowRight } from "react-icons/fa";

const FindPartners = () => {
    const partner = {
        name: "Jhunkar Mahmud",
        subject: "English",
        rating: 3, // ⭐ change 1–5
        img: user,
    };

    return (
        <div className="my-10 px-4 md:px-10 lg:px-20 flex justify-center">
            <div className="card bg-base-200 w-full sm:w-80 md:max-w-2xl shadow-2xl rounded-3xl hover:scale-105 transition-transform duration-300">
                {/* Avatar */}
                <div className="avatar flex justify-center mt-8">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full ring ring-offset-4 ring-blue-500 shadow-2xl bg-base-200 overflow-hidden">
                        <img
                            src={partner.img}
                            alt={`${partner.name}'s profile`}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="card-body text-center space-y-3">
                    <h2 className="card-title mx-auto text-xl md:text-2xl font-black bg-linear-to-r from-[#2663EB] to-[#9333EA] bg-clip-text text-transparent">
                        {partner.name}
                    </h2>

                    <p className="text-sm md:text-base">
                        <strong>Subject:</strong> {partner.subject}
                    </p>

                    {/* ✅ Dynamic Rating (works correctly now) */}
                    <div className="rating justify-center">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <input
                                key={num}
                                type="radio"
                                name={`rating-${partner.name}`}
                                className={`mask mask-star-2 ${num <= partner.rating
                                        ? "bg-orange-400"
                                        : "bg-gray-300"
                                    }`}
                                readOnly
                            />
                        ))}
                    </div>

                    {/* Button */}
                    <div className="card-actions justify-center mt-3">
                        <Link
                            to="/profile"
                            className="my-btn flex items-center gap-2 px-5 py-2 rounded-xl text-sm md:text-base"
                        >
                            View Profile <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindPartners;
