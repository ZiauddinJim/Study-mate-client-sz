import userIcon from "../assets/user.png"
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../MyComponents/Container';
import MyLink from '../MyComponents/MyLink';
import { RiMenu2Line } from "react-icons/ri";
import logo from "../assets/logo.png"
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const { user, signOutFun } = useAuth()
    // console.log(user);
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out'
        })
    }, []);
    // theme use
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "corporate");
    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    const handleTheme = (checked) => {
        setTheme(checked ? "forest" : "corporate");
    };

    const handleLogout = () => {
        signOutFun()
            .then(() => {
                toast.success("Logout successful!")
            }).catch((error) => {
                // An error happened.
                toast.error("Logout failed: " + error.message);
            });
    }

    // navbar
    const links = <>
        <li><MyLink to={"/"}>Home</MyLink></li>
        <li><MyLink to={"findPartners"}>Find Partners</MyLink></li>
        {

            user &&
            <>
                <li><MyLink to={"/createPartner"}>Create Partner Profile</MyLink></li>
                <li><MyLink to={"/myConnection"}>My Connection</MyLink></li>
            </>
        }
    </>


    return (
        <div className='bg-base-100 shadow-lg'>
            <Container className={'navbar'}>
                <div className="navbar-start" data-aos="fade-right">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RiMenu2Line />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-xl">
                        <img className='w-10 h-10' src={logo} alt="" />
                        <span className='text-gradient font-bold'>Study Mate</span>
                    </Link>
                </div>

                <div className="navbar-end gap-3" data-aos="fade-left">
                    {/* Button */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {links}
                        </ul>
                    </div>
                    {/* theme toggle */}
                    <label className="toggle text-base-content">
                        <input onChange={(e) => handleTheme(e.target.checked)} defaultChecked={localStorage.getItem('theme') === "forest"} type="checkbox" className="theme-controller" />
                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                    </label>
                    {/* Login toggle */}
                    {
                        user
                            ? <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user.displayName}>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL || userIcon} alt="Profile Picture" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow gap-2">
                                    <Link to={"/profile"} className="btn btn-outline btn-primary">Profile</Link>
                                    <Link className="btn btn-outline btn-primary" onClick={handleLogout}>Logout</Link>
                                </ul>
                            </div>
                            : <Link to={"/login"} className='my-btn'>Login</Link>
                    }

                </div>
            </Container>
        </div>
    );
};

export default Navbar;