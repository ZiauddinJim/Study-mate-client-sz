
import React from 'react';
import Container from '../../MyComponents/Container';
import toast from 'react-hot-toast';

const Newsletter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        toast.success("Subscribed successfully!");
        e.target.reset();
    }

    return (
        <div className="py-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

            <Container>
                <div className="bg-base-100 rounded-[3rem] p-8 md:p-16 shadow-2xl text-center border border-gray-100 dark:border-gray-800 relative z-10" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Stay in the Loop</h2>
                    <p className="text-base-content/70 max-w-xl mx-auto mb-8">
                        Join our newsletter to get the latest study tips, feature updates, and community highlights delivered straight to your inbox.
                    </p>

                    <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-lg w-full rounded-full pr-32 bg-base-200 focus:bg-base-100 border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                            required
                        />
                        <button type="submit" className="absolute right-2 btn btn-primary rounded-full px-6">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-base-content/50 mt-4">No spam, we promise. Unsubscribe anytime.</p>
                </div>
            </Container>
        </div>
    );
};

export default Newsletter;
