import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layouts/Layout';
import Home from '../Pages/Home';

const Root = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home,
            }
        ]
    }
])

export default Root;