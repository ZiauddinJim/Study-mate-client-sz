import React, { useEffect, useState } from "react";
import { FaStar, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { MdOutlineSchool, MdAccessTime, MdOutlineWorkOutline } from "react-icons/md";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router";

const PartnerDetails = () => {
    const { id } = useParams()
    const Axios = useAxios()
    const [partner, setPartner] = useState([])

    useEffect(() => {
        Axios.get(`/partner/${id}`)
            .then(data => {
                // console.log(data.data);
                setPartner(data.data)
            })
    }, [Axios, id])

    return (
        <div className="min-h-screen partner-details flex justify-center items-center p-4">
            <div className="max-w-3xl w-full bg-base-100 shadow-xl rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Left Section: Image */}
                    <div className="md:w-1/3 flex justify-center items-center bg-gradient p-6">
                        <img
                            src={partner.ProfileImage}
                            alt={partner.name}
                            className="w-40 h-40 object-cover rounded-full border-4 border-white"
                        />
                    </div>

                    {/* Right Section: Info */}
                    <div className="md:w-2/3 p-6">
                        <h2 className="text-2xl font-bold mb-2">{partner.name}</h2>

                        {/* Rating */}
                        <div className='flex items-center mb-3'>
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <FaStar key={index} size={20} className="mr-1"
                                        color={starValue <= partner.rating ? "#2663EB" : "#E4E5E9"} />
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <MdOutlineSchool className="text-primary" />
                                <p>
                                    <span className="font-semibold">Subject:</span> {partner.subject}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdAccessTime className="text-primary" />
                                <p>
                                    <span className="font-semibold">Availability:</span>{" "}
                                    {partner.availabilityTime}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWorkOutline className="text-primary" />
                                <p>
                                    <span className="font-semibold">Experience:</span>{" "}
                                    {partner.experienceLevel}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-primary" />
                                <p>
                                    <span className="font-semibold">Location:</span> {partner.location}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUserFriends className="text-primary" />
                                <p>
                                    <span className="font-semibold">Partner Count:</span>{" "}
                                    {partner.partnerCount}
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-6">
                            <button className="w-full my-btn font-semibold">
                                Send Partner Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerDetails;
