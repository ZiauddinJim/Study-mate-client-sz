import React, { useRef, useState } from 'react';
import Container from '../MyComponents/Container';
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyConnections = () => {
    const Axios = useAxiosSecure()
    const { user } = useAuth()
    const [data, setData] = useState([])
    const modalRef = useRef(null);
    // console.log(user.email);
    useEffect(() => {
        Axios.get(`/my-connection?email=${user.email}`,)
            .then(data => {
                // console.log(data.data);
                setData(data.data)
            })
    }, [Axios, user])

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
    const handleUpdate = () => {
        modalRef.current.showModal()
    }


    return (
        <div className='my-10'>
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
                                data.map((data, i) => {
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
                                                {/* <br />
                                                <span className="badge badge-ghost badge-sm">{studyMode}</span> */}
                                            </td>
                                            <td>{studyMode}</td>
                                            <th className='flex gap-2'>
                                                <button onClick={() => handleUpdate(_id)} className="btn btn-outline hover:btn-primary hover:text-white btn-xs">Updata</button>
                                                <button onClick={() => handelDelete(_id)} className="btn btn-outline hover:btn-secondary hover:text-white btn-xs">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form className="space-y-6" aria-label="Create partner profile form">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    {/* Full Name */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Full Name</span>
                                        </label>
                                        <input name="name" required type="text" placeholder="Your partner name" className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Email read-only */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input type="email" name="email" defaultValue={user.email} placeholder="xyz@example.com" readOnly className="input focus:border-secondary outline-none w-full bg-base-200" />
                                    </div>

                                    {/* Profile Image URL */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Profile Image URL</span>
                                        </label>
                                        <input type="url" required name="ProfileImage" placeholder="https://example.com/avatar.jpg" className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Subject</span>
                                        </label>
                                        <input name="subject" required type="text" placeholder="e.g., English, Math, Programming" className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Study Mode */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Study Mode</span>
                                        </label>
                                        <select name="studyMode" defaultValue="" className="select select-bordered w-full">
                                            <option disabled selected>Choose study mode</option>
                                            <option>Online</option>
                                            <option>Offline</option>
                                        </select>
                                    </div>

                                    {/* Availability */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Availability Time</span>
                                        </label>
                                        <input name="availabilityTime" required type="text" placeholder="e.g., Evening 6-9 PM" className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Location</span>
                                        </label>
                                        <input name="location" type="text" required placeholder="City, area, or preferred location" className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Experience Level */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Experience Level</span>
                                        </label>
                                        <select name="experienceLevel" defaultValue="" className="select select-bordered w-full">
                                            <option disabled selected>Select experience</option>
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
                                        <input name="rating" required type="number" min="0" max="5" step="1" placeholder="0 - 5" className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                    {/* Partner Count */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-semibold">Partner / Connections Count</span>
                                        </label>
                                        <input name="partnerCount" type="number" defaultValue={0} readOnly className="input focus:border-secondary outline-none w-full" />
                                    </div>

                                </div>

                                {/* Actions */}
                                <div className="flex justify-end gap-3">
                                    <button type="reset" className="btn btn-primary text-white">Reset</button>
                                    <button type="submit" className="my-btn">Update</button>
                                </div>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
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