import React from "react";
import useAuth from "../Hooks/useAuth";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router";
import userIcon from "../assets/user.png"
import toast from "react-hot-toast";



const formatDisplayName = (name) => {
    return name
        .split(' ')
        .filter(word => word.trim().length > 0)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


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
        <div className="container mx-auto px-6 py-12 flex justify-center mt-27">
            <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full overflow-hidden">

                {/* Left side - quick actions */}
                <div className="flex flex-col items-center justify-center p-8 bg-linear-to-br from-primary to-secondary text-white w-full lg:w-1/3">
                    <div className="avatar">
                        <div className="w-40 h-40 rounded-full ring ring-offset-4 shadow-xl bg-base-200">
                            <img
                                src={photo}
                                alt={`${name} profile`}
                                className="object-cover w-full h-full rounded-full"
                            />
                        </div>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold">{formatDisplayName(name)}</h2>
                    {/* <p className="mt-1 text-sm opacity-90 "><MdOutlineMailOutline className=" text-xl" /> {email}</p> */}
                    <div className="flex items-center gap-2 text-sm mb-4">
                        <MdOutlineMailOutline className=" text-xl" />
                        <span>{email}</span>
                    </div>
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
                    <h3 className="text-3xl font-bold mb-2 text-gradient">Account Info</h3>
                    <div className="divider my-3"></div>
                    <p>
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
