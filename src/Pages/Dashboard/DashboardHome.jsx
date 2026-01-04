import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { MdConnectWithoutContact } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const DashboardHome = () => {
    const { user } = useAuth();
    const Axios = useAxiosSecure();
    const [stats, setStats] = useState({
        connections: 0,
        totalPartners: 0,
        profileStatus: 'Pending',
        pendingRequests: 0 // Placeholder if backend doesn't support it yet
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!user?.email) return;

            try {
                // Fetch My Connections
                const connectionsRes = await Axios.get(`/my-connection?email=${user.email}`);

                // Fetch All Partners (to count total database)
                const partnersRes = await Axios.get('/partner');

                // Check if user has a profile
                const myProfile = partnersRes.data.find(p => p.email === user.email);

                setStats({
                    connections: connectionsRes.data.length,
                    totalPartners: partnersRes.data.length,
                    profileStatus: myProfile ? 'Active' : 'Not Created',
                    pendingRequests: 0
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                // toast.error("Failed to load dashboard data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user, Axios]);

    return (
        <div>
            <div className="bg-base-100 p-8 rounded-2xl shadow-sm border border-base-300">
                <h1 className="text-3xl font-bold text-base-content">
                    Welcome back, <span className="text-primary">{user?.displayName || "Student"}</span>! 👋
                </h1>
                <p className="text-base-content opacity-70 mt-2">
                    Here is what's happening with your account today.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center p-10"><span className="loading loading-spinner loading-lg text-primary"></span></div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {/* My Connections */}
                    <div className="stat bg-base-100 shadow-sm rounded-xl border border-base-300 p-6">
                        <div className="stat-figure text-primary">
                            <MdConnectWithoutContact className="text-4xl opacity-50" />
                        </div>
                        <div className="stat-title text-base-content opacity-70">My Connections</div>
                        <div className="stat-value text-primary">{stats.connections}</div>
                        <div className="stat-desc text-base-content opacity-60">Active study partners</div>
                    </div>

                    {/* Total Partners */}
                    <div className="stat bg-base-100 shadow-sm rounded-xl border border-base-300 p-6">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-4xl opacity-50" />
                        </div>
                        <div className="stat-title text-base-content opacity-70">Total Members</div>
                        <div className="stat-value text-secondary">{stats.totalPartners}</div>
                        <div className="stat-desc text-base-content opacity-60">Registered study partners</div>
                    </div>

                    {/* Profile Status */}
                    <div className="stat bg-base-100 shadow-sm rounded-xl border border-base-300 p-6">
                        <div className={`stat-figure ${stats.profileStatus === 'Active' ? 'text-success' : 'text-warning'}`}>
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value text-lg mt-2 hidden md:block opacity-0">.</div>
                        <div className="stat-title text-base-content opacity-70">Profile Status</div>
                        <div className={`stat-value text-2xl ${stats.profileStatus === 'Active' ? 'text-success' : 'text-warning'}`}>
                            {stats.profileStatus}
                        </div>
                        <div className="stat-desc text-base-content opacity-60">
                            {stats.profileStatus === 'Active' ? 'You are visible to others' : 'Create profile to be found'}
                        </div>
                    </div>
                </div>
            )}

            {/* Quick Actions / Recent Activity Placeholder */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card bg-base-100 shadow rounded-xl border border-base-300">
                    <div className="card-body">
                        <h2 className="card-title text-base-content">Quick Actions</h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <Link to="/findPartners" className="btn btn-outline btn-primary btn-sm">Find New Partners</Link>
                            <Link to={stats.profileStatus === 'Active' ? "/dashboard/profile" : "/dashboard/createPartner"} className="btn btn-outline btn-secondary btn-sm">
                                {stats.profileStatus === 'Active' ? 'Edit Profile' : 'Create Profile'}
                            </Link>
                            <Link to="/dashboard/myConnection" className="btn btn-outline btn-accent btn-sm">View Connections</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;
