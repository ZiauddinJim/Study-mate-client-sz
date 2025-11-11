import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const instance = axios.create({
    baseURL: 'http://localhost:3220',
});

const useAxiosSecure = () => {
    const { user, signOutFun } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Request interceptor
        const instanceRequest = instance.interceptors.request.use((config) => {
            const token = user.accessToken;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // Response interceptor
        const instanceResponse = instance.interceptors.response.use(
            (res) => res,
            (err) => {
                console.log("error inside the interceptors:", err);
                const status = err.response?.status;
                if (status === 403 || status === 401) {
                    Swal.fire({
                        title: "Session expired — please log in again",
                        icon: "warning",
                        draggable: true
                    });
                    signOutFun().then(() => {
                        navigate("/login");
                    });
                }
                return Promise.reject(err);
            }
        );

        // Cleanup interceptors on unmount
        return () => {
            instance.interceptors.request.eject(instanceRequest);
            instance.interceptors.response.eject(instanceResponse);
        };
    }, [navigate, user, signOutFun]);

    return instance;
};

export default useAxiosSecure;
