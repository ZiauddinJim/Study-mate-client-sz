import { Link } from 'react-router';
import logo from "../assets/logo.png"

const Error404Partner = () => {

    return (
        <div className="min-h-screen my-20 flex items-center justify-center px-4 py-12">
            {/* <title>Error 404 | Study Mate</title> */}
            <div className={`max-w-2xl w-full text-center transition-all duration-700 opacity-100 translate-y-0}`}>
                {/* Animated 404 Text */}
                <div className="relative mb-8 flex justify-center">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-gradient animate-pulse">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img src={logo} className="w-20 animate-bounce" />
                    </div>
                </div>

                {/* Error Message */}
                <div className="space-y-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Oops! This Partner details Page cannot be found!
                    </h2>
                    <p className="text-lg max-w-md mx-auto text-accent">
                        It looks like you've entered the wrong partner details page. Let's get you back to learning!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/" className="btn bg-gradient text-white font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                    >Back to Home</Link>
                    <button onClick={() => window.history.back()} className="btn btn-outline text-black bg-white font-semibold rounded-lg border-2 border-gray-300 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200"
                    >Go Back</button>
                </div>

            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 2s ease-in-out infinite;
                }
                .delay-100 {
                    animation-delay: 0.3s;
                }
                .delay-200 {
                    animation-delay: 0.6s;
                }
            `}</style>
        </div>
    );
};

export default Error404Partner;