
import React from 'react';
import Container from '../MyComponents/Container';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ContactSupport = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Your Message is accepted!",
            text: `Our team member will contact you immediately.`,
            icon: "success",
            confirmButtonColor: "#9333EA",
        });
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-base-100 py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-0"></div>

            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 relative z-10" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Touch</span>
                    </h1>
                    <p className="text-xl text-base-content/70">
                        Have a question or facing an issue? Our team is here to help you 24/7.
                        Reach out to us and let's solve it together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
                    {/* Contact Info Cards */}
                    <div className="space-y-6" data-aos="fade-right">
                        <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/30 transition-all duration-300">
                            <div className="card-body flex-row items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl shrink-0">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="card-title text-xl">Email Us</h3>
                                    <p className="text-base-content/70">support@studymate.com</p>
                                    <p className="text-base-content/70">info@studymate.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/30 transition-all duration-300">
                            <div className="card-body flex-row items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-2xl shrink-0">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3 className="card-title text-xl">Call Us</h3>
                                    <p className="text-base-content/70">+1 (555) 123-4567</p>
                                    <p className="text-base-content/70">Mon - Fri, 9am - 6pm EST</p>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/30 transition-all duration-300">
                            <div className="card-body flex-row items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl shrink-0">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="card-title text-xl">Visit Us</h3>
                                    <p className="text-base-content/70">123 Learning Avenue,</p>
                                    <p className="text-base-content/70">Knowledge City, KC 45678</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card bg-base-100/50 backdrop-blur-md shadow-2xl border border-base-200" data-aos="fade-left">
                        <div className="card-body p-8 space-y-6">
                            <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium mr-2">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" className="input input-bordered focus:input-primary bg-base-100/50" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium mr-2">Email Address</span>
                                    </label>
                                    <input type="email" placeholder="your@mail.com" className="input input-bordered focus:input-primary bg-base-100/50" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium mr-2">Subject</span>
                                    </label>
                                    <input type="text" placeholder="How can we help?" className="input input-bordered focus:input-primary bg-base-100/50" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium mr-2">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-32 focus:textarea-primary bg-base-100/50" placeholder="Write your message here..." required></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary text-white text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
                                        Send Message <FaPaperPlane className="ml-2 text-sm" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactSupport;
