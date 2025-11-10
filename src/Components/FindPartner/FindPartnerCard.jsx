import React, { useState } from "react";
import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FindPartnerCard = ({ data }) => {
    const [isHover, setIsHover] = useState(false);

    const { _id, name, subject, studyMode, experienceLevel, ProfileImage } = data;

    return (
        <motion.div
            className="p-6 md:p-8 rounded-3xl bg-base-100 shadow-md border border-secondary hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            whileHover={{ scale: 1.03 }}
        >
            {/* Profile Image */}
            <div className="avatar mb-4">
                <div className="ring-primary ring-offset-base-100 w-28 md:w-36 rounded-full ring-offset-2 ring-2">
                    <img
                        className="object-cover rounded-full" src={ProfileImage} alt={name} />
                </div>
            </div>

            {/* Name */}
            <h2 className="font-bold text-xl md:text-2xl text-gradient mb-2">{name}</h2>

            {/* Subject */}
            <div className="badge badge-outline border-secondary mb-2">
                <strong className="text-primary mr-1">Subject:</strong> {subject}
            </div>

            {/* Study Mode */}
            <div className="badge badge-outline border-secondary mb-2">
                <strong className="text-primary mr-1">Study Mode:</strong> {studyMode}
            </div>

            {/* Experience Level */}
            <div className="badge badge-outline border-secondary mb-4">
                {experienceLevel}
            </div>

            {/* View Profile Button */}
            <Link to={`/partnerDetails/${_id}`}
                className="flex items-center gap-2 text-secondary font-medium w-fit">
                <AnimatePresence mode="wait">
                    {isHover ? (
                        <motion.span
                            key="btn"
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -15, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="my-btn">
                            View Profile <FaLongArrowAltRight />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="icon"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}>
                            <FaLongArrowAltRight size={20} className="mt-3 my-3" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </Link>
        </motion.div>
    );
};

export default FindPartnerCard;
