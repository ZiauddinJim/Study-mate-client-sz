
import React from 'react';
import { Link } from 'react-router';
import Container from '../../MyComponents/Container';

const CTA = () => {
    return (
        <div className="py-24 bg-linear-to-br from-primary to-secondary text-white">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-6 text-center md:text-left" data-aos="fade-right">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight">
                            Ready to Transform <br /> Your Study Routine?
                        </h2>
                        <p className="text-white/80 text-lg max-w-lg mx-auto md:mx-0">
                            Join thousands of students achieving their academic goals together. It's free, fun, and effective.
                        </p>
                    </div>

                    <div className="flex-none" data-aos="fade-left">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/register" className="btn btn-lg bg-white text-primary border-none hover:bg-gray-100 shadow-xl rounded-full px-10">
                                Get Started Now
                            </Link>
                            <Link to="/findPartners" className="btn btn-lg btn-outline text-white border-white hover:bg-white/20 hover:border-white rounded-full px-10">
                                Browse Partners
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CTA;
