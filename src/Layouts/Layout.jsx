import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar />
            </header>
            <main className='flex-1'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;