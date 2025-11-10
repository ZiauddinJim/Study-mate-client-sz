import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TopPartnerCard = ({ data }) => {
    // console.log(data);
    const [isHover, setIsHover] = useState(false);

    const { _id, rating, name, subject, experienceLevel, ProfileImage } = data


    return (
        <div
            className={`p-10 rounded-3xl bg-base-100 shadow-lg ${_id && "hover:drop-shadow-xl"} border border-secondary transition-all duration-300`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className='avatar mb-4'>
                <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring-offset-2">
                    <img className='object-cover rounded-full' src={ProfileImage} alt={name} />
                </div>
            </div>

            <div className='font-black text-2xl my-3 text-gradient'>{name}</div>

            <div className='flex justify-between mb-2'>
                <div className='badge badge-outline border-secondary'><strong className='text-primary'>Subject:</strong>{subject}</div>
                <div className='badge badge-outline border-secondary'>{experienceLevel}</div>
            </div>

            {/* Rating */}
            <div className='flex items-center mb-3'>
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                        <FaStar key={index} size={20} className="mr-1"
                            color={starValue <= rating ? "#9333EA" : "#E4E5E9"} />
                    );
                })}
            </div>

            <Link to={`/partnerDetails/${_id}`}
                className="flex items-center gap-2 mt-3 text-secondary font-medium w-fit">
                <AnimatePresence>
                    {isHover ? (
                        <motion.span
                            key="button"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="my-btn">View Profile</span>
                        </motion.span>
                    ) : (
                        <motion.span
                            key="arrow"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaLongArrowAltRight className="mt-3 my-2" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </Link>

        </div>
    );
};

export default TopPartnerCard;
