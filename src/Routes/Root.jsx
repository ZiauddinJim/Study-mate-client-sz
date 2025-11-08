import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home';
import FindPartners from '../Pages/FindPartners';

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
            }
        ]
    }
])

export default Root;