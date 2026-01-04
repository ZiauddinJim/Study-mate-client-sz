import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { FaHome, FaUser, FaUsers, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { MdDashboard, MdConnectWithoutContact } from "react-icons/md";
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import logo from "../assets/logo.png"

const DashboardLayout = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully");
                navigate("/");
            })
            .catch(err => toast.error(err.message));
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "bg-primary text-white" : ""}>
                    <MdDashboard /> Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "bg-primary text-white" : ""}>
                    <FaUser /> My Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/createPartner" className={({ isActive }) => isActive ? "bg-primary text-white" : ""}>
                    <FaUsers /> Create Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/myConnection" className={({ isActive }) => isActive ? "bg-primary text-white" : ""}>
                    <MdConnectWithoutContact /> My Connections
                </NavLink>
            </li>
            <div className="divider"></div>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-primary text-white" : ""}>
                    <FaHome /> Home
                </NavLink>
            </li>
            <li>
                <button onClick={handleLogOut} className="text-red-500 hover:bg-red-100">
                    <FaSignOutAlt /> Logout
                </button>
            </li>
        </>
    );

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar for Mobile */}
                <div className="w-full navbar bg-base-100 lg:hidden shadow-sm">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                            <FaBars />
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-xl font-bold text-primary">Study Mate</div>
                </div>

                {/* Main Content */}
                <div className="p-4 md:p-10 min-h-screen bg-base-200">
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-base-100 border-r border-base-300 text-base-content gap-2">
                    {/* Sidebar Header */}
                    <div className="mb-6 px-4">
                        <Link to={"/"} className="btn btn-ghost text-xl">
                            <img className='w-10 h-10' src={logo} alt="" />
                            <span className='text-gradient font-bold'>Study Mate</span>
                        </Link>
                    </div>

                    {navLinks}
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;
