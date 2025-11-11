import React, { useRef, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import { MdOutlineMail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Container from '../MyComponents/Container';
import toast from 'react-hot-toast';
import { BsEye } from "react-icons/bs";

const Login = () => {
    const { googleSignInFun, setLoading, signInFun, setEmail } = useAuth();
    const emailRef = useRef();
    const [show, setShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault();
        // console.log("Click");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        signInFun(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success(`Welcome back, ${user.displayName}!`);
                // console.log(user);
                navigate(`${location.state ? location.state : '/'}`) // if using react-router
                e.target.reset();
            })
            .catch((error) => {
                // Handling all Firebase auth errors
                let message = '';
                switch (error.code) {
                    case 'auth/invalid-email':
                        message = 'Invalid email address!';
                        break;
                    case 'auth/user-disabled':
                        message = 'This user has been disabled!';
                        break;
                    case 'auth/user-not-found':
                        message = 'No user found with this email!';
                        break;
                    case 'auth/wrong-password':
                        message = 'Incorrect password!';
                        break;
                    case 'auth/invalid-credential':
                        message = 'Incorrect email or password!';
                        break;
                    case 'auth/network-request-failed':
                        message = 'Network error! Please check your internet connection and try again.';
                        break;
                    default:
                        message = 'Something went wrong. Please try again!';
                }
                toast.error(message);
                // console.error(error);
            });
    }
    const handleForgetPassword = () => {
        // console.log(emailRef.current.value);
        const emailValue = emailRef.current?.value;
        setEmail(emailValue);
        navigate("/forgetPassword");


    }
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

    return (
        <Container className={'flex justify-center my-10'}>
            <div className="md:max-w-md w-full px-4 py-4 ">

                <form className=' flex flex-col justify-center' onSubmit={handleSignIn}>
                    {/* Top */}
                    <div className="mb-12 text-center">
                        <h1 className="text-2xl font-black mt-5 text-primary">Log in to your Account</h1>
                        <p className='text-accent mt-2'>Enter your email below <br /> to login to your account</p>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label text-primary">Email</label>
                        <div className="relative flex items-center">
                            <input name="email" ref={emailRef} type="text" required className="w-full text-sm border-b border-slate-300 focus:border-secondary pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
                            <MdOutlineMail className='text-slate-500' />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mt-8">
                        <label className="label text-primary">Password</label>
                        <div className="relative flex items-center">
                            <input name="password" type={show ? "text" : "password"} required className="w-full text-sm border-b border-slate-300 focus:border-secondary pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
                            <span onClick={() => setShow(!show)} className='text-slate-500 hover:text-secondary cursor-pointer'>
                                {show ? <BsEye /> : <FaRegEyeSlash />}
                            </span>
                        </div>
                    </div>

                    {/* Forget password */}
                    <div className="mt-8">
                        <button onClick={handleForgetPassword} type='button' className="text-secondary font-medium text-sm hover:underline cursor-pointer">
                            Forgot Password?
                        </button>
                    </div>

                    {/* Button */}
                    <div className="mt-12">
                        <button type="submit" className="btn hover:btn-primary hover:text-white border-primary w-full shadow font-medium">
                            Sign in
                        </button>
                    </div>
                </form>
                <h3 className="text-[15px] mt-6">Don't have an account <Link to={"/register"} className="text-secondary font-medium hover:underline ml-1 whitespace-nowrap">Register here</Link></h3>

                {/* OR */}
                <div className="my-6 flex items-center gap-4">
                    <hr className="w-full border-slate-300" />
                    <p className="text-sm text-slate-900 text-center">or</p>
                    <hr className="w-full border-slate-300" />
                </div>

                {/* Google */}
                <button onClick={handleGoogle} className="btn hover:btn-primary hover:text-white font-medium border-primary shadow w-full">
                    <FcGoogle />
                    Signin with Google
                </button>
            </div>
        </Container>
    );
};

export default Login;