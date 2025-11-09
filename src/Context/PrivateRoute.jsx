import React from 'react';
import useAuth from '../Hooks/useAuth';
import Spinner from '../Spinner/Spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <Spinner />
    }
    if (user) {
        return children;
    } return <Navigate state={location.pathname} to={"/login"} />
};

export default PrivateRoute;