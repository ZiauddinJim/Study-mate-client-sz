import React, { } from "react";
import { Link } from "react-router";
import TextType from '../Components/CreateProfile/TextType';
import useAuth from "../Hooks/useAuth";
import Spinner from "../Spinner/Spinner";
import useAxios from "../Hooks/useAxios";
import Swal from 'sweetalert2';


const CreateProfile = () => {
    const { loading, user } = useAuth()
    const Axios = useAxios();
    if (loading) return <Spinner />;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const partner = {
            name: form.name.value,
            ProfileImage: form.ProfileImage.value,
            subject: form.subject.value,
            studyMode: form.studyMode.value,
            availabilityTime: form.availabilityTime.value,
            location: form.location.value,
            experienceLevel: form.experienceLevel.value,
            rating: Number(form.rating.value),
            partnerCount: Number(form.partnerCount.value),
            email: form.email.value,
        }
        // console.log(partner);
        Axios.post("/partner", partner)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Partner has been created",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                }
            })

    }
    return (
        <div className="my-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-start gap-4 mb-6">
                    <Link to={"/findPartners"} className="my-btn text-primary hover:underline" > ← Back To Find Partner</Link>
                    <TextType
                        className="text-4xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
                        text={["Create Partner Profile"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                    />
                </div>

                {/* Card */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8">
                        <form onSubmit={handleSubmit} className="space-y-6" aria-label="Create partner profile form">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* Full Name */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Full Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Your partner name" className="input focus:border-secondary outline-none w-full" />
                                </div>

                                {/* Email read-only */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user.email} placeholder="xyz@example.com" readOnly className="input focus:border-secondary outline-none w-full bg-base-200" />
                                </div>

                                {/* Profile Image URL */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Profile Image URL</span>
                                    </label>
                                    <input type="url" name="ProfileImage" placeholder="https://example.com/avatar.jpg" className="input focus:border-secondary outline-none w-full" />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Subject</span>
                                    </label>
                                    <input name="subject" type="text" placeholder="e.g., English, Math, Programming" className="input focus:border-secondary outline-none w-full" />
                                </div>

                                {/* Study Mode */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Study Mode</span>
                                    </label>
                                    <select name="studyMode" defaultValue="" className="select select-bordered w-full">
                                        <option disabled selected>Choose study mode</option>
                                        <option>Online</option>
                                        <option>Offline</option>
                                    </select>
                                </div>

                                {/* Availability */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Availability Time</span>
                                    </label>
                                    <input name="availabilityTime" type="text" placeholder="e.g., Evening 6-9 PM" className="input focus:border-secondary outline-none w-full" />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Location</span>
                                    </label>
                                    <input name="location" type="text" placeholder="City, area, or preferred location" className="input focus:border-secondary outline-none w-full" />
                                </div>

                                {/* Experience Level */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Experience Level</span>
                                    </label>
                                    <select name="experienceLevel" defaultValue="" className="select select-bordered w-full">
                                        <option disabled selected>Select experience</option>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Expert</option>
                                    </select>
                                </div>

                                {/* Rating */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Rating</span>
                                    </label>
                                    <input name="rating" type="number" min="0" max="5" step="1" placeholder="0 - 5" className="input focus:border-secondary outline-none w-full" />
                                </div>

                                {/* Partner Count */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Partner / Connections Count</span>
                                    </label>
                                    <input name="partnerCount" type="number" defaultValue={0} readOnly className="input focus:border-secondary outline-none w-full" />
                                </div>

                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3">
                                <button type="reset" className="btn btn-primary">Reset</button>
                                <button type="submit" className="my-btn">Create Partner Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateProfile;