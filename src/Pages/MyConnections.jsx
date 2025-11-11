import React, { useState } from 'react';
import Container from '../MyComponents/Container';
import { useEffect } from 'react';
import useAxios from '../Hooks/useAxios';
import useAuth from '../Hooks/useAuth';

const MyConnections = () => {
    const Axios = useAxios()
    const { user } = useAuth()
    const [data, setData] = useState([])
    // console.log(user.email);
    useEffect(() => {
        Axios.get(`/my-connection?email=${user.email}`,)
            .then(data => {
                // console.log(data.data);
                setData(data.data)
            })
    }, [Axios, user])
    

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
                                                <button className="btn btn-outline hover:btn-primary hover:text-white btn-xs">Updata</button>
                                                <button className="btn btn-outline hover:btn-secondary hover:text-white btn-xs">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default MyConnections;