import React from "react";
import { Link } from "react-router";
import TextType from '../Components/CreateProfile/TextType';



const CreateProfile = () => {
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
                        cursorCharacter="|"
                    />
                </div>

                {/* Card */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8">
                        <form className="space-y-6" aria-label="Create partner profile form">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* Full Name */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="e.g., Jhunkar Mahmud" className="input focus:border-secondary outline-none w-full" />
                                </div>

                                {/* Email read-only */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Email (read-only)</span>
                                    </label>
                                    <input type="email" placeholder="xyz@example.com" readOnly className="input input-bordered input-disabled w-full bg-base-200" />
                                </div>

                                {/* Profile Image URL */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Profile Image URL</span>
                                    </label>
                                    <input type="url" placeholder="https://example.com/avatar.jpg" className="input input-bordered w-full" />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Subject</span>
                                    </label>
                                    <input type="text" placeholder="e.g., English, Math, Programming" className="input input-bordered w-full" />
                                </div>

                                {/* Study Mode */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Study Mode</span>
                                    </label>
                                    <select className="select select-bordered w-full">
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
                                    <input type="text" placeholder="e.g., Evening 6-9 PM" className="input input-bordered w-full" />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Location</span>
                                    </label>
                                    <input type="text" placeholder="City, area, or preferred location" className="input input-bordered w-full" />
                                </div>

                                {/* Experience Level */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Experience Level</span>
                                    </label>
                                    <select className="select select-bordered w-full">
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
                                    <input type="number" min="0" max="5" step="0.1" placeholder="0 - 5" className="input input-bordered w-full" />
                                </div>

                                {/* Partner Count */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold">Partner / Connections Count</span>
                                    </label>
                                    <input type="number" min="0" placeholder="0" readOnly className="input input-bordered w-full" />
                                </div>

                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3">
                                <button type="button" className="btn btn-primary">Reset</button>
                                <button type="button" className="my-btn">Create Partner Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateProfile;