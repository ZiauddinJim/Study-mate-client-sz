import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home';
import FindPartners from '../Pages/FindPartners';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from '../Context/PrivateRoute';
import MyConnections from '../Pages/MyConnections';
import CreateProfile from '../Pages/CreateProfile';
import Profile from '../Pages/Profile';
import ForgetPassword from '../Pages/ForgetPassword';
import PartnerDetails from '../Pages/PartnerDetails';
import Error404 from '../Error/Error404';
import Blogs from '../Pages/Blogs';
import ContactSupport from '../Pages/ContactSupport';
import BlogDetails from '../Pages/BlogDetails';
// import PartnerDetails from '../Pages/PartnerDetails';

const Root = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                index: true,
                Component: Home,
            },
            {
                path: "/findPartners",
                Component: FindPartners,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/forgetPassword",
                Component: ForgetPassword,
            },
            {
                path: "/myConnection",
                element: <PrivateRoute>
                    <MyConnections />
                </PrivateRoute>
            },
            {
                path: "/createPartner",
                element: <PrivateRoute>
                    <CreateProfile />
                </PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
            {
                path: "/partnerDetails/:id",
                element: <PartnerDetails />

            },
            {
                path: "/blogs",
                Component: Blogs
            },
            {
                path: "/blogs/:id",
                Component: BlogDetails
            },
            {
                path: "/contact",
                Component: ContactSupport
            }

        ]
    },
    {
        path: "*",
        Component: Error404
    }
])

export default Root;