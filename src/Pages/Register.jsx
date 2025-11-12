import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { BsEye } from "react-icons/bs";
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import firebaseSignUpErrorHandle from '../Utils/firebaseSignUpErrorHandle';
import TextType from '../Components/CreateProfile/TextType';


const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { googleSignInFun, setLoading,
        createUserSignInWithEmailFun,
        updateProfileFun } = useAuth();
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
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value.trim();
        const photoURL = form.photoURL.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const passwordError = validatePassword(password);

        if (passwordError) {
            toast.error(passwordError);
            setLoading(false)
            return;
        }
        try {
            // Create user
            const userCredential = await createUserSignInWithEmailFun(email, password)
            const newUser = userCredential.user;
            // Update user
            await updateProfileFun(displayName, photoURL)
            // toast
            toast.success(`Signup successful. Welcome  ${newUser.displayName || 'User'}!`);
            // navigate route
            navigate(`${location.state || '/'}`)
            // rest form
            form.reset();
        } catch (error) {
            firebaseSignUpErrorHandle(error)
        }
        finally {
            setLoading(false)
        };
    }
    return (
        <div className='flex flex-col justify-center items-center mb-20'>
            <div className="md:max-w-md w-full px-4 py-4">
                <form onSubmit={handleRegister}>
                    {/* Top */}
                    <div className="mb-12 mt-20 flex justify-center">
                        {/* <h1 className="text-3xl font-black text-center">Join <span className='text-secondary'>Study Mate - </span> <br /> Start Learning Smarter</h1> */}
                        <TextType
                            className="lg:text-4xl text-3xl font-extrabold text-gradient mx-3 lg:mx-auto"
                            text={[
                                "Welcome Study Mate ",
                                "Welcome Study Mate ",
                            ]}
                            typingSpeed={75}
                            pauseDuration={5000}
                            showCursor={true}
                        />
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
                        <button type="submit" className="btn hover:btn-primary register-btn-text border-primary w-full shadow font-medium">
                            Register Now
                        </button>
                    </div>
                </form>
                <h3 className="text-[15px] mt-6 ">Already an account? <Link to={"/login"} className="text-secondary font-medium hover:underline ml-1 whitespace-nowrap">Login here</Link></h3>
                {/* OR */}
                <div className="my-6 flex items-center gap-4">
                    <hr className="w-full border-slate-300" />
                    <p className="text-sm  text-center">or</p>
                    <hr className="w-full border-slate-300" />
                </div>
                {/* Google */}
                <button onClick={handleGoogle} className="btn hover:btn-primary register-btn-text font-medium border-primary shadow w-full">
                    <FcGoogle />
                    Signin with Google
                </button>
            </div>
        </div>
    );
};

export default Register;