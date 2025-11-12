import React, { useRef, useState } from 'react';
import Container from '../MyComponents/Container';
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaUsers } from 'react-icons/fa';
// import { useNavigate } from 'react-router';

const MyConnections = () => {
    const Axios = useAxiosSecure()
    const { user, loading, setLoading } = useAuth()
    const [data, setData] = useState([])
    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState([])
    // const navigate = useNavigate()

    // console.log(user.email);
    useEffect(() => {
        Axios.get(`/my-connection?email=${user.email}`,)
            .then(data => {
                // console.log(data.data);
                setData(data.data)
            }).catch(error => {
                console.error('Error fetching connections:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [Axios, user, setLoading])

    const handelDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2663EB",
            cancelButtonColor: "#9333EA",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`/connection/${_id}`)
                    .then(dataD => {
                        console.log(dataD.data);
                        if (dataD.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your partner has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#2663EB",
                            });
                            const updateData = data.filter(connection => connection._id !== _id)
                            setData(updateData)
                        }
                    })

            }
        });
        // console.log(_id);

    }

    const handleUpdate = (_id) => {
        modalRef.current.showModal()
        // console.log(_id);
        // console.log(data);
        const presentData = data.find(currentData => currentData._id === _id)
        // console.log(presentData);
        setUpdateData(presentData)
    }

    const handleSubmitUpdate = (e) => {
        const form = e.target;
        const updatePartner = {
            // name: form.name.value,
            // ProfileImage: form.ProfileImage.value,
            subject: form.subject.value,
            studyMode: form.studyMode.value,
            availabilityTime: form.availabilityTime.value,
            // location: form.location.value,
            experienceLevel: form.experienceLevel.value,
            rating: Number(form.rating.value),
            // partnerCount: Number(form.partnerCount.value),
            // email: form.email.value,
        }
        // console.log(updatePartner);
        Axios.patch(`/connection/${updateData._id}`, updatePartner)
            .then(response => {
                console.log(response.data);
                modalRef.current.close();
                // navigate("/myConnection")
                // Axios.get(`/my-connection?email=${user.email}`,)
                //     .then(data => {
                //         setData(data.data)
                //     })
            })
    }
    if (loading) return <Spinner />;

    return (
        <div className='mb-10 mt-27'>
            <Container>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-primary'>
                                <th>Sl.</th>
                                <th>Partner Details</th>
                                <th>Subject</th>
                                <th>Study Mode</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (data.length !== 0)
                                    ? data.map((data, i) => {
                                        const { _id, name, ProfileImage, subject, email, studyMode } = data
                                        return (
                                            <tr key={_id}>
                                                <th className='text-primary'>{i + 1}</th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={ProfileImage}
                                                                    alt={name} />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{name}</div>
                                                            <div className="text-sm opacity-50">{email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {subject}
                                                </td>
                                                <td>{studyMode}</td>
                                                <th className='flex gap-2'>
                                                    <button onClick={() => handleUpdate(_id)} className="btn btn-outline hover:btn-primary hover:text-white btn-xs">Update</button>
                                                    <button onClick={() => handelDelete(_id)} className="btn btn-outline hover:btn-secondary hover:text-white btn-xs">Delete</button>
                                                </th>
                                            </tr>
                                        )
                                    })
                                    : <tr>
                                        <td colSpan="5" className="text-center py-12">
                                            <div className="flex flex-col items-center justify-center space-y-3">
                                                <FaUsers size={120} className='text-accent' />

                                                <div>
                                                    <h3 className="font-semibold text-lg ">No Study Partners Found</h3>
                                                    <p className="text-sm text-accent mt-1">Your connection list is currently empty</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>

                    {/* Modal dialog */}
                    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h2 className='text-center text-2xl font-bold text-gradient my-5'>Update your partner Details</h2>
                            <form onSubmit={handleSubmitUpdate} className="space-y-6" aria-label="Create partner profile form">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    {/* Full Name */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Full Name</span>
                                        </label>
                                        <input name="name" type="text" defaultValue={updateData.name} readOnly className="input focus:border-secondary outline-none w-full bg-base-200" />
                                    </div>

                                    {/* Email read-only */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input type="email" name="email" defaultValue={updateData.email} readOnly className="input focus:border-secondary outline-none w-full bg-base-200" />
                                    </div>

                                    {/* Profile Image URL */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Profile Image URL</span>
                                        </label>
                                        <input type="url" name="ProfileImage" defaultValue={updateData.ProfileImage} readOnly className="input focus:border-secondary outline-none w-full bg-base-200" />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Subject</span>
                                        </label>
                                        <input name="subject" type="text" defaultValue={updateData.subject} className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Study Mode */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Study Mode</span>
                                        </label>
                                        <select name="studyMode" defaultValue={updateData.studyMode} className="select select-bordered w-full">
                                            <option>Online</option>
                                            <option>Offline</option>
                                        </select>
                                    </div>

                                    {/* Availability */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Availability Time</span>
                                        </label>
                                        <input name="availabilityTime" type="text" defaultValue={updateData.availabilityTime} className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Location</span>
                                        </label>
                                        <input name="location" type="text" defaultValue={updateData.location} readOnly className="input focus:border-secondary outline-none w-full bg-base-200" />
                                    </div>

                                    {/* Experience Level */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Experience Level</span>
                                        </label>
                                        <select name="experienceLevel" defaultValue="" className="select select-bordered w-full">
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Expert</option>
                                        </select>
                                    </div>

                                    {/* Rating */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Rating</span>
                                        </label>
                                        <input name="rating" type="number" min="0" max="5" step="1" defaultValue={updateData.rating} className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Partner Count */}
                                    {/* <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Partner / Connections Count</span>
                                        </label>
                                        <input name="partnerCount" type="number" defaultValue={updateData.partnerCount} readOnly className="input focus:border-secondary outline-none w-full bg-base-200" />
                                    </div> */}

                                </div>

                                {/* Actions */}
                                <div className="flex justify-end gap-3">
                                    <button type="reset" className="btn btn-outline text-black bg-white font-semibold rounded-lg border-2 border-gray-300 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200">Reset</button>
                                    <button type="submit" className="my-btn">Update</button>
                                </div>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-outline bg-white text-black font-semibold rounded-lg border-2 border-gray-300 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </Container>
        </div>
    );
};

export default MyConnections;