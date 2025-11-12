import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ? "my-btn" : `${className} hover:text-secondary`}>
            {children}
        </NavLink>
    );
};

export default MyLink;
