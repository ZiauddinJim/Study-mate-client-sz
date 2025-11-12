import React, { useEffect, useState } from "react";
import { FaStar, FaMapMarkerAlt, FaUserFriends, FaArrowLeft } from "react-icons/fa";
import { MdOutlineSchool, MdAccessTime, MdOutlineWorkOutline, MdOnlinePrediction } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Error404Partner from "../Error/Error404Patner";

const PartnerDetails = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const AxiosSecure = useAxiosSecure()
    const [refetch, setRefetch] = useState(false)
    // console.log(user.displayName);
    const [partner, setPartner] = useState([])
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        AxiosSecure.get(`/partner/${id}`)
            .then(data => {
                // console.log(data.data);
                setPartner(data.data)
            }).catch(error => setError(error))
    }, [AxiosSecure, id, refetch])


    const handleConnection = (e) => {
        e.preventDefault();

        AxiosSecure.post("/connection", {
            ProfileImage, name, email,
            rating, subject, availabilityTime,
            experienceLevel, location,
            partnerCount, studyMode, connectionBy: user.email, partnerId: _id
        })
            .then(data => {
                // console.log(data.data);
                if (data.data.insertedId) {
                    AxiosSecure.patch(`/partner-count/${_id}`)
                        .then(data => {
                            // console.log(data.data);
                            setRefetch(!refetch)
                            navigate("/myConnection")
                        })
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Connection has been created",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch(error => {
                console.error("Connection error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response?.data?.message || "Something went wrong! Please try again.",
                });
                navigate("/findPartners")
            })
    }
    if (!partner || error) return <Error404Partner />
    // console.log(partner);

    const { ProfileImage, name, email,
        rating, subject, availabilityTime,
        experienceLevel, location,
        partnerCount, studyMode, _id } = partner

    return (
        <div className="min-h-[60vh] mb-10 mt-27 partner-details flex justify-center items-center p-4">
            <title>Partner Details | Study Mate</title>
            <div className="max-w-3xl w-full bg-base-100 shadow-xl rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Left Section: Image */}
                    <div className="md:w-1/3 flex justify-center items-center bg-gradient p-6">
                        <img
                            src={ProfileImage}
                            alt={name}
                            className="w-40 h-40 object-cover rounded-full border-4 border-white"
                        />
                    </div>

                    {/* Right Section: Info */}
                    <div className="md:w-2/3 p-6">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className=" mb-3">{email}</p>

                        {/* Rating */}
                        <div className='flex items-center mb-3'>
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <FaStar key={index} size={20} className="mr-1"
                                        color={starValue <= rating ? "#2663EB" : "#E4E5E9"} />
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <MdOutlineSchool className="text-primary" />
                                <p>
                                    <span className="font-semibold">Subject:</span> {subject}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdAccessTime className="text-primary" />
                                <p>
                                    <span className="font-semibold">Availability:</span>{" "}
                                    {availabilityTime}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWorkOutline className="text-primary" />
                                <p>
                                    <span className="font-semibold">Experience:</span>{" "}
                                    {experienceLevel}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-primary" />
                                <p>
                                    <span className="font-semibold">Location:</span> {location}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOnlinePrediction className="text-primary" />
                                <p>
                                    <span className="font-semibold">Study Mode:</span>{" "}
                                    {studyMode}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUserFriends className="text-primary" />
                                <p>
                                    <span className="font-semibold">Partner Count:</span>{" "}
                                    {partnerCount}
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-6">
                            <button onClick={handleConnection} className="w-full my-btn font-semibold">
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
