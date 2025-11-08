import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../MyComponents/Container';
import MyLink from '../MyComponents/MyLink';
import { RiMenu2Line } from "react-icons/ri";
import logo from "../assets/logo.png"
const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "corporate");

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleTheme = (checked) => {
        setTheme(checked ? "forest" : "corporate");
    };

    const links = <>
        <li><MyLink to={"/"}>Home</MyLink></li>
        <li><MyLink to={"findPartners"}>Find Partners</MyLink></li>
    </>


    return (
        <div className='bg-base-100 shadow-sm'>
            <Container className={'navbar'}>
                <div className="navbar-start">
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
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {/* theme toggle */}
                    <label className="toggle text-base-content">
                        <input onChange={(e) => handleTheme(e.target.checked)} defaultChecked={localStorage.getItem('theme') === "forest"} type="checkbox" className="theme-controller" />
                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                    </label>
                    {/* Login toggle */}
                    <div className="dropdown dropdown-end tooltip tooltip-left" data-tip="hello">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link>Profile</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;