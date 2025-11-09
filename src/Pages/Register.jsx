import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { BsEye } from "react-icons/bs";
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import firebaseSignUpErrorHandle from '../Utils/firebaseSignUpErrorHandle';


const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { googleSignInFun, setLoading,
        createUserSignInWithEmailFun,
        updateProfileFun, user } = useAuth();
    const [show, setShow] = useState(false)

    // Password validation regex
    const hasUppercase = (s) => /[A-Z]/.test(s);
    const hasLowercase = (s) => /[a-z]/.test(s);
    const isLongEnough = (s) => s.length >= 6;

    const validatePassword = (pw) => {
        if (!hasUppercase(pw)) return "Password must contain at least one uppercase letter.";
        if (!hasLowercase(pw)) return "Password must contain at least one lowercase letter.";
        if (!isLongEnough(pw)) return "Password must be at least 6 characters long.";
        return null;
    };

    const handleGoogle = () => {
        googleSignInFun()
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);

                toast.success(`Welcome, ${user.displayName || 'User'}! `);
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((err) => {
                const error = err.message;
                // console.error(error);

                toast.error(
                    error.includes('popup-closed-by-user')
                        ? 'Google Sign-In cancelled.'
                        : 'Failed to sign in with Google. Please try again.');
            })
            .finally(() => setLoading(false));
    }
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordError = validatePassword(password);
        if (passwordError) {
            toast.error(passwordError);
            return;
        }
        createUserSignInWithEmailFun(email, password)
            .then(() => {
                // Update profile
                updateProfileFun(displayName, photoURL)
                    .then(() => {
                        toast.success(`Signup successful. Welcome  ${user.displayName || 'User'}!`);
                        e.target.reset();
                        navigate(`${location.state ? location.state : '/'}`)
                    })
            })
            .catch(firebaseSignUpErrorHandle)
            .finally(() => setLoading(false));
    }
    return (
        <div className='flex flex-col justify-center items-center mb-20'>
            <div className="md:max-w-md w-full px-4 py-4">
                <form onSubmit={handleRegister}>
                    {/* Top */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-black  text-center mt-20">Join <span className='text-secondary'>Study Mate - </span> <br /> Start Learning Smarter</h1>
                    </div>
                    {/* Name */}
                    <div>
                        <label className="label text-primary">Name</label>
                        <div className="relative flex items-center">
                            <input name="name" type="text" required className="w-full text-sm border-b border-slate-300 focus:border-secondary pl-2 pr-8 py-3 outline-none" placeholder="Enter your name" />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="mt-8">
                        <label className="label text-primary">Email</label>
                        <div className="relative flex items-center">
                            <input name="email" type="email" required className="w-full text-sm border-b border-slate-300 focus:border-secondary pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
                            <MdOutlineMail className='text-slate-500' />
                        </div>
                    </div>
                    {/* Photo URL */}
                    <div className="mt-8">
                        <label className="label text-primary">Photo URL</label>
                        <div className="relative flex items-center">
                            <input name="photoURL" type="text" required className="w-full text-sm border-b border-slate-300 focus:border-secondary pl-2 pr-8 py-3 outline-none" placeholder="Enter your photo URL" />
                        </div>
                    </div>
                    {/* Password */}
                    <div className="mt-8">
                        <label className="label text-primary">Password</label>
                        <div className="relative flex items-center">
                            <input name="password" type={show ? "text" : "password"} required className="w-full text-sm border-b border-slate-300 focus:border-secondary pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
                            <span onClick={() => setShow(!show)} className='text-slate-500 hover:text-secondary cursor-pointer' >
                                {show ? <BsEye /> : <FaRegEyeSlash />}
                            </span>
                        </div>
                    </div>

                    {/* Remember & Forget password */}
                    <div className="flex items-center mt-8">
                        <input type="checkbox" required defaultChecked={false} className="checkbox checkbox-sm rounded text-secondary" />
                        <label className="ml-3 block text-sm">
                            I agree to the Terms and Privacy Policy
                        </label>
                    </div>

                    {/* Button */}
                    <div className="mt-12">
                        <button type="submit" className="btn hover:btn-primary border-primary w-full shadow font-medium">
                            Register Now
                        </button>
                    </div>
                </form>
                <h3 className="text-[15px] mt-6 ">Already an account? <Link to={"/login"} className="text-secondary font-medium hover:underline ml-1 whitespace-nowrap">Login here</Link></h3>
                {/* OR */}
                <div className="my-6 flex items-center gap-4">
                    <hr className="w-full border-slate-300" />
                    <p className="text-sm text-slate-900 text-center">or</p>
                    <hr className="w-full border-slate-300" />
                </div>
                {/* Google */}
                <button onClick={handleGoogle} className="btn hover:btn-primary font-medium border-primary shadow w-full">
                    <FcGoogle />
                    Signin with Google
                </button>
            </div>
        </div>
    );
};

export default Register;