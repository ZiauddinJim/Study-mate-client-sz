import React from "react";
import useAuth from "../Hooks/useAuth";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router";
import userIcon from "../assets/user.png"
import toast from "react-hot-toast";

const getInitials = (name) => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    const initials = parts
        .map(p => Array.from(p)[0])
        .slice(0, 2)
        .join("");
    return initials.toUpperCase();
};

const formatDisplayName = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

const Profile = () => {
    const { user, signOutFun } = useAuth();
    const name = user.displayName;
    const email = user.email;
    const photo = user.photoURL || userIcon;

    const handleLogout = () => {
        signOutFun()
            .then(() => {
                toast.success("Logout successful!")
            }).catch((error) => {
                // An error happened.
                toast.error("Logout failed: " + error.message);
            });
    }
    return (
        <div className="container mx-auto px-6 py-12 flex justify-center">
            <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full overflow-hidden">

                {/* Left side - quick actions */}
                <div className="flex flex-col items-center justify-center p-8 bg-linear-to-br from-primary to-secondary text-white w-full lg:w-1/3">
                    <div className="avatar">
                        <div className="w-40 h-40 rounded-full ring ring-offset-4 ring-white shadow-xl bg-base-200">
                            {photo ? (
                                <img
                                    src={photo}
                                    alt={`${name} profile`}
                                    className="object-cover w-full h-full rounded-full"
                                />
                            ) : (
                                <div className="flex items-center justify-center w-full h-full text-4xl font-bold text-primary-content">
                                    {formatDisplayName(name)}
                                </div>
                            )}
                        </div>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold">{name}</h2>
                    <p className="mt-1 text-sm opacity-90">Learner · Achiever</p>

                    <div className="mt-6 flex gap-2 justify-center">
                        <Link to="/" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                            Home
                        </Link>
                        <Link onClick={handleLogout} className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                            Logout
                        </Link>
                    </div>
                </div>

                {/* Right side - Info */}
                <div className="card-body p-8 w-full lg:w-2/3">
                    <h3 className="text-lg font-semibold mb-2">Account Info</h3>
                    <div className="divider my-3"></div>

                    <div className="flex items-center gap-2 text-sm mb-4">
                        <MdOutlineMailOutline className=" text-xl" />
                        <span>{email}</span>
                    </div>

                    <p className="text-sm">
                        <strong>Study Mate</strong> helps you learn, organize, and achieve your goals.
                        It's your smart companion for managing study sessions, tracking progress,
                        and staying productive every day.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
